"use client";

import { useState, useEffect } from "react";
import { Search, X, Filter, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  slug: string;
  tags: string[];
}

// Mock data - Em produção, isso viria de uma API
const allArticles: Article[] = [
  {
    id: 1,
    title: "Guarda Compartilhada: Como Funciona e Quais os Direitos dos Pais",
    excerpt: "Entenda tudo sobre a guarda compartilhada, seus benefícios para os filhos e como é estabelecida na prática jurídica.",
    category: "Direito de Família",
    author: "Dra. Brennda Silva",
    publishedAt: "2024-01-15",
    readTime: "8 min",
    slug: "guarda-compartilhada-direitos-pais",
    tags: ["Guarda Compartilhada", "Direito de Família", "Divórcio", "Filhos", "Pais"]
  },
  {
    id: 2,
    title: "Pensão Alimentícia: Valores, Revisão e Principais Dúvidas",
    excerpt: "Saiba como é calculada a pensão alimentícia, quando pode ser revisada e quais são os direitos e deveres de cada parte.",
    category: "Direito de Família",
    author: "Dra. Brennda Silva",
    publishedAt: "2024-01-10",
    readTime: "6 min",
    slug: "pensao-alimenticia-valores-revisao",
    tags: ["Pensão Alimentícia", "Direito de Família", "Alimentos", "Revisão", "Filhos"]
  },
  {
    id: 3,
    title: "Direitos do Consumidor: Como Reclamar de Produtos Defeituosos",
    excerpt: "Conheça seus direitos como consumidor e aprenda o passo a passo para reclamar de produtos com defeito.",
    category: "Direito do Consumidor",
    author: "Dra. Brennda Silva",
    publishedAt: "2024-01-05",
    readTime: "5 min",
    slug: "direitos-consumidor-produtos-defeituosos",
    tags: ["Direitos do Consumidor", "Produtos Defeituosos", "Reclamação", "CDC"]
  }
];

const categories = ["Todos", "Direito de Família", "Direito Civil", "Direito do Consumidor"];

interface ArticleSearchProps {
  onResults?: (results: Article[]) => void;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

export default function ArticleSearch({ onResults }: ArticleSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(allArticles);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const filtered = allArticles.filter(article => {
      const matchesSearch = searchTerm === "" || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === "Todos" || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredArticles(filtered);
    if (onResults) {
      onResults(filtered);
    }
  }, [searchTerm, selectedCategory, onResults]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simular delay de busca
    setTimeout(() => {
      setIsSearching(false);
    }, 500);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedCategory("Todos");
  };

  return (
    <div className="w-full">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por título, conteúdo ou tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-3 rounded-lg border border-gray-300 focus:border-destaque focus:ring-2 focus:ring-destaque/20 focus:outline-none text-gray-900"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 rounded-lg border border-gray-300 focus:border-destaque focus:ring-2 focus:ring-destaque/20 focus:outline-none text-gray-900 bg-white appearance-none min-w-48"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <Button 
            type="submit" 
            className="bg-destaque hover:bg-destaque/90 text-white px-6 py-3"
            disabled={isSearching}
          >
            {isSearching ? "Buscando..." : "Buscar"}
          </Button>
        </div>

        {/* Clear Filters */}
        {(searchTerm || selectedCategory !== "Todos") && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-600">Filtros ativos:</span>
            {searchTerm && (
              <span className="px-3 py-1 bg-destaque/10 text-destaque rounded-full text-sm">
                &ldquo;{searchTerm}&rdquo;
              </span>
            )}
            {selectedCategory !== "Todos" && (
              <span className="px-3 py-1 bg-principal/10 text-principal rounded-full text-sm">
                {selectedCategory}
              </span>
            )}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={clearSearch}
              className="ml-2"
            >
              Limpar filtros
            </Button>
          </div>
        )}
      </form>

      {/* Results */}
      <div className="mb-6">
        <p className="text-gray-600">
          {filteredArticles.length === 0 
            ? "Nenhum artigo encontrado com os filtros aplicados." 
            : `${filteredArticles.length} ${filteredArticles.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}`
          }
        </p>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/artigos/${article.slug}`}
              className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-destaque/30"
            >
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  article.category === 'Direito de Família' ? 'bg-blue-100 text-blue-800' :
                  article.category === 'Direito Civil' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {article.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-principal mb-3 group-hover:text-destaque transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-principal mb-2">
            Nenhum resultado encontrado
          </h3>
          <p className="text-gray-600 mb-6">
            Tente ajustar seus filtros ou usar termos diferentes de busca.
          </p>
          <Button onClick={clearSearch} className="bg-destaque hover:bg-destaque/90 text-white">
            Ver todos os artigos
          </Button>
        </div>
      )}
    </div>
  );
}
