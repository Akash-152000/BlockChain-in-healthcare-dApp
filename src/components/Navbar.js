import React, { Component } from 'react';



class Navbar extends Component {

  render() {
    return (
      <section id="navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-blue">
          <div class="container-fluid"><strong><b>
            <a class="navbar-brand Nav" href="/">HealthCare</a></b></strong>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="/"><b>HOME</b></a>
                  <a class="nav-link" href="/Main"><b>PATIENT</b></a>
                  <a class="nav-link" href="/Doctor"><b>DOCTOR</b></a>
                </div>
           