import { Autocomplete, Button, TextField } from "@mui/material";

import styles from './styles.module.css'

export function Search() {
  return(
    <div className={styles.searchContainer}>
      <div className={styles.searchButtons}>
        <Button variant='outlined'>FLuxos</Button>
        <Button variant='outlined'>Equipes</Button>
      </div>
      <Autocomplete
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField label="Fluxos" variant="standard"  style={{width: '100%'}}/>
        )}
        style={{width: '435px'}}
      />
    </div>
  )
}