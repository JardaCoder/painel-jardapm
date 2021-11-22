import DefaultLayout from "../layouts/Default";
import usePageTitle from "../../core/hooks/usePageTitle";
import ProjectList from "../features/ProjectList";
import ErrorBoundary from "../components/ErrorBoundary";

export default function ProjectListView() {
  usePageTitle("Lista de projetos");

  return (
    <DefaultLayout>
      <ErrorBoundary>
        <ProjectList />
      </ErrorBoundary>
    </DefaultLayout>
  );
}
