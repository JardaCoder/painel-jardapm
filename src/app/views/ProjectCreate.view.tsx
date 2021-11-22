import DefaultLayout from "../layouts/Default";
import usePageTitle from "../../core/hooks/usePageTitle";
import ProjectForm from "../features/ProjectForm";
import ErrorBoundary from "../components/ErrorBoundary";

export default function ProjectCreateView() {
  usePageTitle("Novo projeto");

  return (
    <DefaultLayout>
      <ErrorBoundary>
        <ProjectForm />
      </ErrorBoundary>
    </DefaultLayout>
  );
}
