import { Link } from "react-router-dom"
import Logo from "../../components/Logo"
import buildingImage from "../../assets/images/home-img.png"
import arrowDownImage from "../../assets/images/arrow-down.svg"
import academyImage from "../../assets/images/academy-img.png"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useParams } from 'react-router';
import { useRef, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function Delivery({ deliveryCount, graphFilter, sort, sortType, graphFilterData, logs }) {

    //const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    //console.log("logData",logData);
    const { id, month } = useParams();
    const ref = useRef(null);
    const itemsPerPage = 10;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const [logData, setLogData] = useState([]);
    const [pageCount, setPageCount] = useState();
    const [allLogs, setAllLogs] = useState();
    const [search, setSearch] = useState();

    useEffect(() => {
        console.log("assssd", logs)
        console.log(itemOffset, endOffset)
        const currentItems = logs?.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(logs?.length / itemsPerPage);
        console.log("currentItems", currentItems)
        setPageCount(pageCount);
        setLogData(currentItems);
        setAllLogs(logs);
    }, [logs])

    const serachLog = (e) => {
        setSearch(e.target.value)
        if (e.target.value) {
            const filtered = allLogs.filter(entry => Object.values(entry).some(val => val.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())));
            setLogData(filtered)
            const currentItems = filtered?.slice(itemOffset, endOffset);
            const pageCount = Math.ceil(filtered?.length / itemsPerPage);
            setPageCount(pageCount);
        } else {
            setLogData(allLogs)
            const currentItems = allLogs?.slice(itemOffset, endOffset);
            const pageCount = Math.ceil(allLogs?.length / itemsPerPage);
            setPageCount(pageCount);
        }

    }


    const options = {
        plugins: {
            title: {
                display: true,
                text: '',
            },
            legend: {
                position: "top",
                align: "end"
            }
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        }
    };

    const chartType = sortType;
    let monthData = [];
    let labels;
    if (chartType == '1') {
        for (var n = 1; n <= 31; n++) {
            monthData.push(n);
        }
        labels = monthData;
    } else {
        labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', "September", "October", "November", "December"];
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Incoming',
                data: deliveryCount?.length > 0 && deliveryCount[0]?.incomingData,
                backgroundColor: 'rgb(133, 110, 206)',
            },
            {
                label: 'Outgoing',
                data: deliveryCount?.length > 0 && deliveryCount[0]?.outgoingData,
                backgroundColor: 'rgb(96, 166, 90)',
            },
            {
                label: 'Escorts',
                data: deliveryCount?.length > 0 && deliveryCount[0]?.escortsData,
                backgroundColor: 'rgb(188, 30, 45)',
            },
        ],
    };

    //console.log("data", data)



    const handlePageClick = (event) => {
        console.log('logs', allLogs);
        const newOffset = (event.selected * itemsPerPage) % allLogs.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        const endOffset = newOffset + itemsPerPage;
        console.log("asassa", newOffset, endOffset)
        let currentItems = allLogs?.slice(newOffset, endOffset);
        console.log(currentItems)
        setLogData(currentItems);
    };





    return (
        <div className="column-main-wrapper">
            <div className="report-section">
                <div className="report-items">
                    <div className="report-item">
                        <div className="report-item-box incoming-box">
                            <div className="report-item-left">
                                <span className="report-name">Incoming</span>
                                <strong className="report-number">
                                    {
                                        deliveryCount.length > 0 && deliveryCount[0].incoming
                                    }</strong>
                            </div>
                            <div className="report-item-right">
                                <span className="report-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23 18L13.5 8.5L8.5 13.5L1 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 18H23V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="report-item">
                        <div className="report-item-box outgoing-box">
                            <div className="report-item-left">
                                <span className="report-name">Outgoing</span>
                                <strong className="report-number">
                                    {
                                        deliveryCount.length > 0 && deliveryCount[0].outgoing
                                    }</strong>
                            </div>
                            <div className="report-item-right">
                                <span className="report-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 6H23V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="report-item">
                        <div className="report-item-box escorts-box">
                            <div className="report-item-left">
                                <span className="report-name">Escorts</span>
                                <strong className="report-number">
                                    {
                                        deliveryCount.length > 0 && deliveryCount[0].escort
                                    }</strong>
                            </div>
                            <div className="report-item-right">
                                <span className="report-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column-main-container graph-section">
                <div className="column-topbar-section">
                    <div className="column-main-title">
                        <h2 className="column-title">Deliveries</h2>
                    </div>
                    <div className="column-topbar-right">
                        <div className="topbar-col monthly-col">
                            <div className="topbar-dropdown" ref={ref} onClick={() => graphFilter()}>
                                <div className="topbar-dropdown-toggle">
                                    <span className="topbar-dropdown-text">{sortType == '1' ? "Monthly" : "Yearly"}</span>
                                    <span className="topbar-dropdown-arrow"><img src={arrowDownImage} alt="Arrow" width="12" height="12" /></span>
                                </div>
                                <ul className={sort ? "topbar-dropdown-items dropdown-active" : "topbar-dropdown-items"}>
                                    <li className="topbar-dropdown-item" onClick={() => graphFilterData(1)}><a href="#">Monthly</a></li>
                                    <li className="topbar-dropdown-item" onClick={() => graphFilterData(2)}><a href="#">Year</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column-list-section">
                    <Bar options={options} data={data} />
                </div>
            </div>

            <div className="card-section tenant-activity-sect">
                <div className="card-head">
                    <h2 className="card-title">Tenant’s Activity</h2>
                    <div className="search-section">
                        <form>
                            <div className="input-group">
                                <input id="search" className="input-field" type="text" placeholder="Search here..." name="Search" value={search} onChange={serachLog} />
                                <button className="btn search-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.33268 15.0003C9.81183 15 11.2484 14.5049 12.4135 13.5937L16.0768 17.257L17.2552 16.0787L13.5919 12.4153C14.5035 11.25 14.999 9.81319 14.9994 8.33366C14.9994 4.65783 12.0085 1.66699 8.33268 1.66699C4.65685 1.66699 1.66602 4.65783 1.66602 8.33366C1.66602 12.0095 4.65685 15.0003 8.33268 15.0003ZM8.33268 3.33366C11.0902 3.33366 13.3327 5.57616 13.3327 8.33366C13.3327 11.0912 11.0902 13.3337 8.33268 13.3337C5.57518 13.3337 3.33268 11.0912 3.33268 8.33366C3.33268 5.57616 5.57518 3.33366 8.33268 3.33366Z" fill="#201D1D" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table">
                        <tbody>
                            {
                                logData?.length > 0 ?
                                logData?.map(function (activity, i) {
                                    return (<tr key={i}>
                                        <td width="15%">
                                                {
                                                    activity?.picture ?
                                                        <img src={activity?.picture} alt="" style={{width:"20%"}} />
                                                        :
                                                        <img src={buildingImage} alt="" style={{width:"20%"}}  />
                                                }
                                        </td>
                                        <td width="10%">
                                            <div className="academy-box-name">
                                                {
                                                    activity?.type
                                                }
                                            </div>
                                        </td>
                                        <td width="20%">
                                            <div className="tenant-address">
                                                {
                                                    activity?.tenant
                                                }
                                            </div>
                                        </td>
                                        <td width="20%">
                                            <div className="tenant-address">
                                                {
                                                    activity?.tenant_contact
                                                }
                                            </div>
                                        </td>
                                        <td width="10%">
                                            <div className="academy-box-name">
                                                {
                                                    activity?.status
                                                }
                                            </div>
                                        </td>
                                        <td className="text-right" width="10%">
                                            <div className="tenant-time">
                                                {
                                                    activity?.time
                                                }
                                            </div>
                                        </td>
                                    </tr>)
                                })
                                :
                                <tr>
                                    <td>No activity found</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        className='pagination'
                    />
                </div>
            </div>

        </div>
    )
}

export default Delivery;