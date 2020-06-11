import one from '../pages/one'
import two from '../pages/two'
import Apppage from '../pages/app'
const routes  = [{
    path:'/',
    component:Apppage,
    routes:[
    {
        path:'/',
        component:one,
        routes: [],
    },
    {
        path:'/two',
        component:two,
        routes: [],
    }
]
}]

export default routes