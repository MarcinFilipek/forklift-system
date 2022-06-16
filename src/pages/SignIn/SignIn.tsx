import { Container } from '@mui/system'
import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

export const SignIn = () => {
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const target = event.target as typeof event.target & {
            login: { value: string }
            password: { value: string }
        }

        console.log(target.login.value, target.password.value)
    }
    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container sx={{ p: 2 }} maxWidth="sm">
                <div
                    style={{
                        border: '1px solid black',
                        backgroundColor: '#baf7ff',
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <Grid
                            container
                            spacing={2}
                            sx={{ p: 2 }}
                            direction={'column'}
                            alignItems={'center'}
                        >
                            <Grid item xs={12}>
                                <TextField
                                    data-testid="login-input"
                                    id="login"
                                    label="Nazwa użytkownika"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    data-testid="password-input"
                                    id="password"
                                    label="Hasło"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <p>save</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            variant="contained"
                                            type="submit"
                                        >
                                            Sign in
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    )
}
