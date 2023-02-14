import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Building from '../view/building/index'
import Delivery from '../view/deliveries/index'

export default function PrivateRoutes() {


    return (
        <div className="page-wrapper_ dashboard-wrapper">
            <main className="page-main">
                <Sidebar />
                <div className="column-main">
                    <Header />
                    <Routes>
                        <Route path="/building" element={<Building />} />
                        <Route path="/deliver/:id/:month" element={<Delivery />} />
                        <Route path="*" element={<Building />} />
                    </Routes>
                </div>
            </main>
        </div>
    )
}