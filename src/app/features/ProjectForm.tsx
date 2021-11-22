import { FormHTMLAttributes, ReactHTMLElement, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { Project, ProjectActivity } from "../../core/models/Project.interface";
import useProject from "../../core/hooks/useProject";
import { useParams } from "react-router";
import confirm from "../../core/utils/confirm";
import ActivityForm from "./ActivityForm";

export default function ProjectForm() {
  //--- Caso o id da url estiver preenchido, quer dizer que o registro está sendo visualizado.
  const { id } = useParams<{ id: string }>();
  const [editing, setEditing] = useState(id ? true : false);
  //----

  const [body, setBody] = useState<Project>({} as Project);
  const [activities, setActivities] = useState<ProjectActivity[]>([]);
  const formRef = useRef<any>(null);

  //Hooks personalizados.
  const { saveProject, updateProject, deleteProject, getProjectDetails } = useProject();

  //----- Metodos do projeto
  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      let project = body.id ? await updateProject(body) : await saveProject(body);

      if (project && project.id) {
        setBody(project);
      }
    } catch (error) {}
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteProject = () => {
    confirm({
      title: "Apagar o projeto?",
      onConfirm: () => deleteProject(body.id),
    });
  };

  //----- Metodos do projeto

  useEffect(() => {
    if (editing) {
      try {
        getProjectDetails(Number(id)).then((project) => {
          if (project) {
            setBody(project.project);
            setActivities(project.activities);
          }
        });
      } catch (error) {}
    } else {
      formRef.current?.reset();
      setBody({} as Project);
      setActivities([] as ProjectActivity[]);
    }
  }, [editing]);

  useEffect(() => {
    if (!id) {
      setEditing(false);
    }
  }, [id]);

  return (
    <>
      <PostFormWrapper onSubmit={handleFormSubmit} ref={formRef}>
        <Input
          label="Nome"
          placeholder="Jarda Project Manager"
          name="name"
          value={body?.name}
          onChange={handleInputChange}
        />

        <Input
          label="Data de início"
          placeholder="Data inicial"
          type="date"
          name="initialDate"
          value={body?.initialDate}
          onChange={handleInputChange}
        />

        <Input
          label="Data final"
          placeholder="Data final"
          type="date"
          name="finalDate"
          disabled={!body?.initialDate}
          min={body.initialDate || undefined}
          value={body?.finalDate}
          onChange={handleInputChange}
        />

        <Button variant="primary" label="Salvar projeto" type="submit" />
        {body.id && <Button variant="danger" label="Apagar projeto" type="button" onClick={handleDeleteProject} />}
      </PostFormWrapper>
      <ActivityForm projectId={body.id} activities={activities} setActivities={setActivities} />
    </>
  );
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
