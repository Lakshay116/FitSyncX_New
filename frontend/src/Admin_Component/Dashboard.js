
import * as React from 'react';
import '../css/Dashboard.css'
import Groups2Icon from '@mui/icons-material/Groups2';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Growth from '../images/growth.png'
import Trainer from '../images/trainer.png'
import Fees from '../images/paying.png'
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import LoadingScreen from '../components/Loading'


function Dashboard() {
    return (
        <LoadingScreen>
            <div style={{ display: 'flex', flex: 'row', flexWrap: 'wrap' }}>

                <div >
                    <card class="card_main" style={{ float: 'left' }}>
                        <div class="card">
                            <Groups2Icon></Groups2Icon>
                            <h4 >Total Members</h4>
                        </div>
                        <div class="card" style={{ justifyContent: 'left' }}>
                            <h1 style={{ textAlign: 'left', fontSize: '1.5rem', marginLeft: '10%', marginTop: '10%' }}>300</h1>
                            <img src={Growth} alt="" style={{ width: '20%', marginLeft: '40%' }} />
                        </div>
                    </card >
                    <card class="card_main" style={{ float: "left" }}>
                        <div class="card">
                            <Diversity1Icon style={{ fontSize: '2rem' }}></Diversity1Icon>
                            <h4 style={{ paddingBottom: '10px' }}>Trainers</h4>
                        </div>
                        <div class="card" style={{ justifyContent: 'left' }}>
                            <h1 style={{ textAlign: 'left', fontSize: '1.5rem', marginLeft: '15%', marginTop: '7%' }}>7</h1>
                            <img src={Trainer} alt="" style={{ width: '20%', marginLeft: '45%' }} />
                        </div>
                    </card>
                    <card class="card_main" style={{ float: "left" }}>
                        <div class="card">
                            <AttachMoneyIcon style={{ fontSize: '2rem' }}></AttachMoneyIcon>
                            <h4 style={{ paddingBottom: '10px' }}>Pending Fees</h4>
                        </div>
                        <div class="card" style={{ justifyContent: 'left' }}>
                            <h1 style={{ textAlign: 'left', fontSize: '1.5rem', marginLeft: '11%', marginTop: '7%' }}>100</h1>
                            <img src={Fees} alt="" style={{ width: '20%', marginLeft: '40%' }} />
                        </div>
                    </card>
                    <card class="card_main" style={{ float: "left" }}>
                        <div class="card">
                            <Groups2Icon></Groups2Icon>
                            <h4 >Fees Submitted</h4>
                        </div>
                        <h1 style={{ textAlign: 'left', fontSize: '1.5rem', marginLeft: '10%', marginTop: '10%' }}>200</h1>
                    </card>
                </div >
                <div className='piechart_div'>
                    <PieChart className='piechart'
                        series={[
                            {
                                innerRadius: 30,
                                paddingAngle: 4,
                                data: [
                                    { id: 0, value: 300, label: 'Members', color: 'moon' },
                                    { id: 2, value: 100, label: 'Fees Pending' },
                                    { id: 3, value: 200, label: 'Fees Submitted', color: 'orangered' },
                                ],
                            },
                        ]}
                        width={290}
                        height={150}
                    />
                    <h3 style={{ textAlign: 'center' }}>Fees Chart</h3>
                </div>
                <div className='piechart_div' style={{ marginLeft: '11%' }}>
                    <LineChart className='linechart'
                        xAxis={[{ data: [2000, 2005, 2010, 2015, 2020, 2025], label: 'year' }]}
                        series={[
                            {
                                data: [38, 29, 100, 180, 250, 300],
                                label: 'Members',

                            },
                        ]}
                        width={300}
                        height={300}
                    />
                </div>
            </div >
        </LoadingScreen>
    )
}





export default Dashboard   
