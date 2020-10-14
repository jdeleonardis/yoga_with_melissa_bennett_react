import React from "react";

function AdminHome() {

    const logOut = () => {        
        document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        window.location.reload();
    }    
 
    return (    
        <main className="container">
            <div className="row py-3">
                <section className="col-lg-12">
                        <header>
                            <h1>Admin Home</h1>
                        </header>        
                </section>
            </div>

            <div className="row">
                <section className="col-lg-12">
                    <div>
                        <p>test test test test</p>
                    </div>


                    <button type="submit" onClick={logOut} className="btn greenbtn">Submit</button>
                    {/* <div id="btnwrapper" class="pb-3">
                        <a href="/classes">
                            <button type="button" class="btn greenbtn">Class Information</button>
                        </a>
                    </div> */}
                </section>     
            </div>    
        </main>
    );
};

export default AdminHome;