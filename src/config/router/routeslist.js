import AppPage from '../../pages/app.js'
import One from '../../pages/one'




const routes = [
    {
        path:'/',
        name:'apppage',
        component:AppPage,
        // childRoutes:[
        //     {
        //         path:'one',
        //         name:'one',
        //         component:One
        //     }
        // ]
    },
    {
        path:'/one',
        name:'One',
        component:One,
    },
]
export default routes