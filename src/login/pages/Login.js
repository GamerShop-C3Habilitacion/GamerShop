import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginStyles.css"

function LoginPage() {


    return (
        <Fragment>
            <div className=" container-fluid fondo">
                <br />
                <div className="container fondo-azulc">
                    <div className="text-center"><br /><h5 className="letra-blanca">INICIAR SESION</h5><br />
                    </div>
                    <div><h5 className="letra-oscura">Ingresa tu correo electronico GMAIL</h5></div>
                    <div className=" form-floating mb-3">
                        <input type="email" className="login-title form-control" id="floatingInput" />
                        <label for="floatingInput" className="letra-oscura"> Correo electronico "GMAIL"</label>
                    </div>
                    <br />
                    <div><h5 className="letra-oscura">¿Cuál es tu funcion?</h5></div>
                    <div className="form-floating ">
                        <select class="form-select login-title" aria-label="Default select example">
                            <option className="btn-info" selected>Selecciona tu rol antes de ingresar</option>
                            <option className="btn-info" value="1">Administrador</option>
                            <option className="btn-info" value="2">Vendedor</option>
                        </select>
                    </div>
                    <br />
                    <div className="container">
                        <Link to="/" class="btn btn-primary ">INGRESAR
                        </Link>
                    </div>
                    <br />
                    <div class="text-center">
                        <img src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_960_720.jpg" class="rounded" alt="" />
                    </div>
                    <br/>
                </div>
                <br/>


            </div>
        </Fragment>

    )
}

export default LoginPage;