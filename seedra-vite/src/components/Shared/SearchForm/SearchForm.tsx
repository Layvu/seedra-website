import React, { useState, FormEvent } from "react";

import { SearchFormProps } from "types/searchForm";
import { SearchFormUI } from "@components/ui/Shared/SearchForm";

export const SearchForm: React.FC<SearchFormProps> = ({
  placeholder = "Search",
  onSubmit,
  className,
}) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSubmit) {
      onSubmit(query.trim());
    }
  };

  return (
    <SearchFormUI
      query={query}
      onQueryChange={setQuery}
      onSubmit={handleSubmit}
      placeholder={placeholder}
      className={className}
    />
  );
};
