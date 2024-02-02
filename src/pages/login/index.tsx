import styles from './styles.module.css'

import { Button, Grid, TextField, Typography } from '@mui/material'
import LogoFiap from '../../assets/images/fiap-logo.png'
import { useLoginForm } from './useLoginForm'
import { useLoginService } from './useLoginService'

export function LoginPage() {
  const service = useLoginService()

  const form = useLoginForm({
    onSubmit: (data) => { 
      service.login(data, () => { console.log('certo!') }) 
    }
  })

  return (
    <div className={styles.wrap}>
      <div className={styles.form}>
        <Grid container gap={2}>
          <Grid item sm={12}>
            <img src={LogoFiap} alt='logo fiap' />
          </Grid>
          <Grid item sm={12}>
            <Typography variant='body1'>Sistema do Aluno</Typography>
          </Grid>

          <Grid item sm={12}>
            <TextField
              fullWidth
              label={'Login'}
              disabled={service.loading}
              error={!!form.errors.login}
              helperText={form.errors.login}
              {...form.getFieldProps('login')}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              fullWidth
              label={'Senha'}
              disabled={service.loading}
              error={!!form.errors.password}
              helperText={form.errors.password}
              {...form.getFieldProps('password')}
            />
          </Grid>
          <Grid item sm={12}>
            <Button
              fullWidth
              variant='contained'
              disabled={service.loading}
              onClick={form.submitForm}
            >
              Login
            </Button>
          </Grid>
        </Grid>

      </div>
    </div>
  )
}