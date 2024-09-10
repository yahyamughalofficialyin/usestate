import React, { useState } from 'react'

const App = () => {

    // const [count, setCount] = useState(0);

    // const countAdd = () => {
    //     setCount(count + 1);
    // }

    // const countSub = () => {
    //     setCount(count - 1);
    // }

    const [navbar, setNavbar] = useState(false);

    const toggleNavbar = () => {
        setNavbar(!navbar);
    }

    return (
        <>
            {navbar && (
                <div className="container mt-5 ml-5">
                    <div className="l-navbar" id="nav-bar">
                        <nav className="nav">
                            <div>
                                <p className="nav-logo">
                                    <i className='bx bx-layer nav-logo-icon'></i>
                                    <span className="text text-primary">
                                        Shaheen Code Crafters
                                    </span>
                                </p>
                                <div className="nav-list">
                                    <p className="nav-link active">
                                        <i className='bx bx-grid-alt nav-icon'></i>
                                        <span className="nav-name">Dashboard</span>
                                    </p>
                                    <p className="nav-link">
                                        <i className='bx bx-user nav-icon'></i>
                                        <span className="nav-name">Users</span>
                                    </p>
                                    <p className="nav-link">
                                        <i className='bx bx-message-square-detail nav-icon'></i>
                                        <span className="nav-name">Messages</span>
                                    </p>
                                    <p className="nav-link">
                                        <i className='bx bx-bookmark nav-icon'></i>
                                        <span className="nav-name">Bookmark</span>
                                    </p>
                                    <p className="nav-link">
                                        <i className='bx bx-folder nav-icon'></i>
                                        <span className="nav-name">Files</span>
                                    </p>
                                    <p className="nav-link">
                                        <i className='bx bx-bar-chart-alt-2 nav-icon'></i>
                                        <span className="nav-name">Stats</span>
                                    </p>
                                </div>
                            </div>
                            
                        </nav>
                    </div>
                </div>
            )}
            <div className="container mt-5 ml-5 justify-content-center">
                <button className="header_toggle btn btn-warning " type='button' onClick={toggleNavbar}>
                    <i className='bx bx-menu' id="header-toggle"></i>
                </button>
            </div>

            {/* <h1>{count}</h1>
            <button type='button' onClick={countAdd}>ADD</button>
            <button type='button' onClick={countSub}>Subtract</button> */}
        </>
    )
}

export default App;
