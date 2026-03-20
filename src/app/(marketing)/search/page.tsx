import { SearchHubPage } from "@/components/home/SearchHubPage";

type SearchRoutePageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchRoutePage({ searchParams }: SearchRoutePageProps) {
  const params = await searchParams;

  return <SearchHubPage query={params.q ?? ""} />;
}
