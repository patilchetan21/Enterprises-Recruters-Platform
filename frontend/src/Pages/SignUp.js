import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


function FormAgency() {
    return (
        <>
            <TextField
                required
                fullWidth
                id="agencyName"
                label="Agency Name"
                name="agencyName"
                autoComplete="agencyName"
            />
            <TextField
                required
                fullWidth
                id="agencyEmail"
                label="Agency Email Address"
                name="agencyEmail"
                autoComplete="agencyEmail"
            />
            <TextField
                required
                fullWidth
                id="agencyRegistrationNumber"
                label="Agency Registration Number"
                name="agencyRegistrationNumber"
                autoComplete="agencyRegistrationNumber"
            />
            <TextField
                required
                fullWidth
                name="agencyPassword"
                label="Password"
                type="password"
                id="agencyPassword"
                autoComplete="new-password"
            />
            <TextField
                required
                fullWidth
                name="agencyConfPassword"
                label="Confirm Password"
                type="password"
                id="agencyConfPassword"
                autoComplete="new-password"
            />
        </>
    );
}
const theme = createTheme();
function FormEnterprise() {
    return (
        <>
            <TextField
                required
                fullWidth
                id="enterpriseName"
                label="Enterprise Name"
                name="enterpriseName"
                autoComplete="enterpriseName"
            />
            <TextField
                required
                fullWidth
                id="enterpriseEmail"
                label="Enterprise Email Address"
                name="enterpriseEmail"
                autoComplete="enterpriseEmail"
            />
            <TextField
                required
                fullWidth
                id="enterpriseRegistrationNumber"
                label="Enterprise Registration Number"
                name="enterpriseRegistrationNumber"
                autoComplete="enterpriseRegistrationNumber"
            />
            <TextField
                required
                fullWidth
                name="enterprisePassword"
                label="Password"
                type="password"
                id="enterprisePassword"
                autoComplete="new-password"
            />
            <TextField
                required
                fullWidth
                name="enterpriseConfPassword"
                label="Confirm Password"
                type="password"
                id="enterpriseConfPassword"
                autoComplete="new-password"
            />
        </>
    );
}




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
      Enterprise Recrutment/Agency Paltform
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp() {
    const [userType, setUserType] = React.useState('enterprise');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            userType: data.get('userType'),
            name: data.get('name'),
            email: data.get('email'),
            registrationNumber: data.get('registrationNumber'),
            password: data.get('password'),
        });
    };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${require('../static/images/img1.svg').default})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <RadioGroup
                            aria-label="User Type"
                            name="userType"
                            value={userType}
                            onChange={(event) => setUserType(event.target.value)}
                        >
                            <FormControlLabel value="enterprise" control={<Radio />} label="Enterprise" />
                            <FormControlLabel value="agency" control={<Radio />} label="Agency" />
                        </RadioGroup>
                        {userType === 'enterprise' ? (
                            <FormEnterprise />
                        ) : userType === 'agency' ? (
                            <FormAgency />
                        ) : null}
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}