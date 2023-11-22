import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Autocomplete, Button, Stack, TextField, createFilterOptions } from "@mui/material";
import AddIcon from '@mui/icons-material/ControlPoint';

import Card from "../../components/Card";
import { FlowData } from "../../services/flowData";
import { Header } from "../../components/Header";
import { TeamData } from "../../services/teamData";
import styles from './styles.module.css'

export function Home() {
  const [isFlowSearch, setIsFlowSearch] = useState(true)
  const [isTeamSearch, setIsTeamSearch] = useState(false)

  const navigate = useNavigate()

  const activeButtonStyle = {
      backgroundColor: '#21409A',
      color: '#fff'
  }

  const handleDisplayFlows = () => {
      setIsFlowSearch(true)
      setIsTeamSearch(false)
  }

  const handleDisplayTeams = () => {
      setIsFlowSearch(false)
      setIsTeamSearch(true)
  }

  const handleCreateNewFlowRedirect = () => {
      navigate('/new-flow')
  }

  const renderFlowCards = () => {
    if (!isFlowSearch) return null

    return (
      <>
        {FlowData.map(flow =>
          <Card
            key={flow.id}
            name={flow.name}
            description={flow.description}
            teams={flow.teams}
          />
        )}
      </>
    )
  }

  const renderTeamCards = () => {
    if (!isTeamSearch) return null

    return (
      <>
        {TeamData.map(team =>
          <Card
            key={team.id}
            name={team.name}
          />
        )}
      </>
    )
  }

  const filterOptions = createFilterOptions({
    limit: 4
  });

  return (
    <div>
      <Header/>
      <div className={styles.searchContainer}>
        <div className={styles.searchButtons}>
          <Button
            variant='outlined'
            onClick={handleDisplayFlows}
            style={isFlowSearch ? activeButtonStyle : {}}
          >
            FLuxos
          </Button>
          <Button
            variant='outlined'
            onClick={handleDisplayTeams}
            style={isTeamSearch ? activeButtonStyle : {}}
          >
              Equipes
          </Button>
        </div>
        <Stack>
          <Autocomplete
            id="disable-close-on-select"
            disableCloseOnSelect
            options={isFlowSearch ? FlowData.map(flow => flow.name) : TeamData.map(team => team.name)}
            filterOptions={filterOptions}
            renderInput={(params) => (
                <TextField {...params} label="Fluxos" variant="standard" style={{width: '100%'}}/>
            )}
            style={{width: '435px'}}
          />
        </Stack>
      </div>
      <Button
        variant="outlined"
        startIcon={<AddIcon/>}
        onClick={handleCreateNewFlowRedirect}
        style={{
            position: 'relative',
            float: 'right',
            margin: '4rem 6rem 0 0'
        }}
      >
        Criar fluxo
      </Button>
      <div className={styles.cardsGrid}>
        {renderFlowCards()}
        {renderTeamCards()}
      </div>
    </div>
  )
}