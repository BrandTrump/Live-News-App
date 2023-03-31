import fetchNews from "@/lib/fetchNews";
import response from "../../../response.json";
import NewsList from "@/app/NewsList";
import { categories } from "@/constants";

type Props = { params: { category: Category } };

async function NewCategory({ params: { category } }: Props) {
  const news: NewsResponse = response || (await fetchNews(category));
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category }));
}
