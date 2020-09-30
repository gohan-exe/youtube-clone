import React from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Drawer,
    ListSubheader,
    Box,
    Grid,
    Hidden,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History'

import AccountCircle from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: 25,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    menuIcons: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    icons: {
        paddingRight: theme.spacing(5),
    },
    grow: {
        flexGrow: 1
    },
    listItemText: {
        fontSize: 14,
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    subheader: {
        textTransform: 'uppercase',
    },
}));

const videos = [
    {
        id: 1,
        title:
            'Tik Tokers pagaram de RICOS e se deram MAL',
        channel: 'Central',
        views: '50 mil de visualizações',
        date: 'há 2 horas',
        avatar: '/images/Central.jpg',
        thumb: '/images/1.PNG',
    },
    {
        id: 2,
        title:
            'Vtuber se assusta com palhaços!',
        channel: 'VtuberSub',
        views: '150 mil de visualizações',
        date: 'há 8 horas',
        avatar: '/images/VtuberSub.jpg',
        thumb: '/images/2.PNG',
    },
    {
        id: 3,
        title:
            'COTAS NO OSCAR? AONDE VAMOS PARAR?',
        channel: 'Canal Tragicômico',
        views: '16 mil de visualizações',
        date: 'há 4 horas',
        avatar: '/images/CanalTragicomico.jpg',
        thumb: '/images/3.PNG',
    },
    {
        id: 4,
        title:
            'You know what happens ( ͡° ͜ʖ ͡°)',
        channel: 'Lilith chan',
        views: '300 mil de visualizações',
        date: 'há 18 horas',
        avatar: '/images/LilithChan.jpg',
        thumb: '/images/4.PNG',

    },
    {
        id: 5,
        title:
            'Globo e SBT estão CANCELANDO Os Debates!',
        channel: 'Mamaefalei',
        views: '71 mil de visualizações',
        date: 'há 4 horas',
        avatar: '/images/MamaeFalei.jpg',
        thumb: '/images/5.PNG',
    },
    {
        id: 6,
        title:
            'Curious Angel | Azazel Helltaker Comic Dub Feat Riley Moore',
        channel: 'MissMoonified',
        views: '7 mil de visualizações',
        date: 'há 2 meses',
        avatar: '/images/MissMoonified.jpg',
        thumb: '/images/6.PNG',
    },
    {
        id: 7,
        title:
            '*Sons de sofrimento*',
        channel: 'Oco',
        views: '10 mil de visualizações',
        date: 'há 1 mes',
        avatar: '/images/Oco.jpg',
        thumb: '/images/7.PNG',
    },
    {
        id: 8,
        title:
            'Vtuber falando sobre o fuzue que o irmão fez em casa [PT-BR]',
        channel: 'VtuberSub',
        views: '200 mil de visualizações',
        date: 'há 1 mes',
        avatar: '/images/VtuberSub.jpg',
        thumb: '/images/8.PNG',
    }




];

function Home() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuIcons}
                        color="inherit"
                        aria-label="menu">

                        <MenuIcon />
                    </IconButton>
                    <img src='/images/preto.png' alt="logo" className={classes.logo} />
                    <div className={classes.grow} />
                    <IconButton className={classes.icons}>
                        <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <MoreVert />
                    </IconButton>
                    <Button startIcon={<AccountCircleIcon />} variant='outlined' color="secondary"
                    >
                        Fazer Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display="flex">
                <Hidden mdDown>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }}
                                        primary={'Início'}
                                    />
                                </ListItem>
                            </List>
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Whatshot />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }}
                                        primary={'Em Alta'}
                                    />
                                </ListItem>
                            </List>
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }}
                                        primary={'Inscrições'}
                                    />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon >
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Biblioteca'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <History />
                                    </ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText,
                                    }} primary={'Histórico'} />
                                </ListItem>
                            </List>
                            <Divider />
                            <Box p={7}>
                                <Typography variant='body2'>
                                    Faça login para curtir vídeos, comentar e se inscrever.
                          </Typography>
                                <Box mt={2}>
                                    <Button
                                        variant='outlined'
                                        color='secondary'
                                        startIcon={<AccountCircle />}
                                    >
                                        Fazer login
                    </Button>
                                </Box>
                            </Box>
                            <Divider />
                            <List
                                component='nav'
                                aria-labelledby='nested-list-subheader'
                                subheader={
                                    <ListSubheader
                                        component='div'
                                        id='nested-list-subheader'
                                        className={classes.subheader}
                                    >
                                        O Melhor do youtube
                     </ListSubheader>
                                }
                            >
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AccountCircle />
                                    </ListItemIcon>
                                    <ListItemText primary={"Música"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AccountCircle />
                                    </ListItemIcon>
                                    <ListItemText primary={"Esportes"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AccountCircle />
                                    </ListItemIcon>
                                    <ListItemText primary={"Jogos"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AccountCircle />
                                    </ListItemIcon>
                                    <ListItemText primary={"Filmes"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AccountCircle />
                                    </ListItemIcon>
                                    <ListItemText primary={"Notícias"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AccountCircle />
                                    </ListItemIcon>
                                    <ListItemText primary={"Ao vivo"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AccountCircle />
                                    </ListItemIcon>
                                    <ListItemText primary={"Destaques"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AccountCircle />
                                    </ListItemIcon>
                                    <ListItemText primary={"Videos 360"} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AccountCircle />
                                    </ListItemIcon>
                                    <ListItemText primary={"Procurar mais"} />
                                </ListItem>
                            </List>
                        </div>
                    </Drawer>
                </Hidden>


                <Box p={8}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 600 }}
                    >
                        Recomendados
                    </Typography>

                    <Grid container spacing={4}>
                        {
                            videos.map((item, index) => (
                                <Grid item lg={3} md={4} xs={12}>
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box>
                                            <Typography
                                                style={{ fontWeight: 600 }}
                                                gutterBottom
                                                variant='body1'
                                                color='textPrimary'
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'
                                            >
                                                {item.channel}
                                            </Typography>
                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} ° ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                    </Grid>
                </Box>
            </Box>
        </div>
    );
}

export default Home;