import { Autocomplete, Button, Stack, TextField } from "@mui/material";

import styles from './styles.module.css'
import { FlowData } from "../../services/flowData";

export function Search() {
  return(
    <div className={styles.searchContainer}>
      <div className={styles.searchButtons}>
        <Button variant='outlined'>FLuxos</Button>
        <Button variant='outlined'>Equipes</Button>
      </div>
      <Stack>
        <Autocomplete
          id="disable-close-on-select"
          disableCloseOnSelect
          options={FlowData.map(card => card.name)}
          renderInput={(params) => (
            <TextField {...params} label="Fluxos" variant="standard"  style={{width: '100%'}}/>
          )}
          style={{width: '435px'}}
        />
      </Stack>
    </div>
  )
}