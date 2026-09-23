import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { ApiCountry } from "@/lib/countries";
import { Check, Loader2, Search, X } from "lucide-react";

interface CountrySelectorProps {
  open: boolean;
  onClose: () => void;
  onSelect: (countryCode: string) => void;
  selectedCountryCode?: string;
}

export function CountrySelector({ open, onClose, onSelect, selectedCountryCode }: CountrySelectorProps) {
  const [search, setSearch] = useState("");
  const { data: apiCountries, isLoading, isError } = useQuery<ApiCountry[]>({
    queryKey: ["/api/countries"],
    enabled: open,
  });

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  if (!open) return null;

  const closePicker = () => {
    setSearch("");
    onClose();
  };

  const countries = (apiCountries || [])
    .filter(c => c.isActive)
    .map(c => ({ code: c.code, name: c.name, phonePrefix: c.phonePrefix }))
    .filter(country => {
      const query = search.trim().toLowerCase();
      return !query || country.name.toLowerCase().includes(query) || country.phonePrefix.includes(query);
    });

  return (
    <div className="country-picker-overlay" onClick={closePicker}>
      <section
        className="country-picker"
        role="dialog"
        aria-modal="true"
        aria-labelledby="country-picker-heading"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="country-picker-header">
          <h2 id="country-picker-heading">Choisir un pays</h2>
          <button type="button" className="country-picker-close" onClick={closePicker} aria-label="Fermer">
            <X aria-hidden="true" />
          </button>
        </div>
        <div className="country-picker-search">
          <Search aria-hidden="true" />
          <input
            autoFocus
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Rechercher un pays"
            aria-label="Rechercher un pays"
          />
        </div>
        <div className="country-picker-list">
          {isLoading ? (
            <div className="flex items-center justify-center gap-2 py-8 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Chargement des pays...</span>
            </div>
          ) : isError ? (
            <p className="country-picker-empty">Impossible de charger les pays.</p>
          ) : countries.map((country) => {
            const selected = country.code === selectedCountryCode;
            return (
              <button
                type="button"
                key={country.code}
                className={`country-picker-row${selected ? " is-selected" : ""}`}
                onClick={() => { onSelect(country.code); closePicker(); }}
                data-testid={`country-option-${country.code}`}
              >
                <span className="country-picker-name">{country.name}</span>
                <span className="country-picker-prefix">+{country.phonePrefix}</span>
                {selected && <Check className="country-picker-check" aria-hidden="true" />}
              </button>
            );
          })}
          {!isLoading && !isError && countries.length === 0 && <p className="country-picker-empty">Aucun pays disponible</p>}
        </div>
      </section>
    </div>
  );
}