import { FormEvent } from "react";

export interface SearchFormUIProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
  placeholder?: string;
  className?: string;
}
