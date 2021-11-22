import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import info from "../../core/utils/info";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { ProjectActivity } from "../../core/models/Project.interface";
import Heading from "../components/Typography/Heading";
import useErrors from "../../core/hooks/useErrors";
import AcitivityCard from "../components/ActivityCard";
import NoData from "../components/NoData/NoData";
import useProjectActivity from "../../core/hooks/useProjectActivity";

interface ActivityFormProps {
  projectId: number;
  activities: ProjectActivity[];
  setActivities: Dispatch<SetStateAction<ProjectActivity[]>>;
}

export default function ActivityForm({
  projectId,
  activities,
  setActivities,
}: ActivityFormProps) {
  const [activity, setActivity] = useState<ProjectActivity>(
    {} as ProjectActivity
  );
  const [newActivity, setNewActivity] = useState(false);

  const { formatAlertFromRequest } = useErrors();
  const { saveProjectActivity, alterActivityStatus } = useProjectActivity();

  //----- Metodos da atividade
  const addActivity = () => {
    if (!projectId) {
      info({
        title: "Ops!",
        description:
          "Você deve salvar o projeto antes de adicionar uma atividade!",
      });
      return;
    }

    setNewActivity(!newActivity);
  };

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    activity.projectId = projectId;

    try {
      let activitySave = await saveProjectActivity(activity);
      setNewActivity(false);
      setActivities([...activities, activitySave]);
      setActivity({} as ProjectActivity);
    } catch (error) {}
  }

  const handleInputActivityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  const updateActivityStatus = async (
    activity: ProjectActivity,
    index: number
  ) => {
    let activitySave = await alterActivityStatus(activity);
    activities[index] = activitySave;
    setActivities([...activities]);
  };
  //----- Metodos da atividade

  return (
    <ActivityFormWrapper onSubmit={handleFormSubmit}>
      <Heading level={2}>
        Atividades
        <Button
          label="Adicionar atividade"
          variant="primary"
          type="button"
          onClick={addActivity}
        ></Button>
      </Heading>

      {newActivity && (
        <>
          <Input
            label="Nome"
            placeholder="Criar template do projeto"
            name="name"
            value={activity?.name}
            onChange={handleInputActivityChange}
          />
          <Input
            label="Data de início da atividade"
            placeholder="Data inicial"
            type="date"
            name="initialDate"
            value={activity?.initialDate}
            onChange={handleInputActivityChange}
          />
          <Input
            label="Data final da atividade"
            placeholder="Data final"
            type="date"
            name="finalDate"
            disabled={!activity?.initialDate}
            min={activity.initialDate || undefined}
            value={activity?.finalDate}
            onChange={handleInputActivityChange}
          />
          <Button variant="primary" label="Adicionar atividade" type="submit" />
        </>
      )}

      <ActivitysListWrapper>
        {activities?.map((activity, index) => (
          <AcitivityCard
            activity={activity}
            updateStatus={() => updateActivityStatus(activity, index)}
          />
        ))}
      </ActivitysListWrapper>
      {activities?.length < 1 && <NoData />}
    </ActivityFormWrapper>
  );
}

const ActivityFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ActivitysListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
