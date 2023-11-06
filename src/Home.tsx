import React from 'react';
import './MyReactCSS.css';

export const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHF0N9FWLh_UA/profile-displayphoto-shrink_200_200/0/1672424590249?e=1701907200&v=beta&t=RyFEY6Q_pQUuXTMQ8Csq3u5DpcyExrOolq2Bi1_6ZZM"
          alt="M.IBRAHIMI photo, as of 2023"
          title="photo-Cv"
          className="profile-img"
        />
        <nav className="nav">
          <a href="#1">Informations personnelles</a>
          <a href="#2">.......Objectifs</a>
          <a href="#3">.......Diplômes</a>
          <a href="#4">.......Compétences techniques</a>
          <a href="#5">.......Compétences Linguistiques</a>
          <a href="#6">.......Autres</a>
        </nav>
      </header>
      <hr className="my-4" />
      <section id="1">
        <h2 className="text-xl font-semibold">Informations personnelles</h2>
        <table>
          <tr>
            <th>Attributs</th>
            <th>Informations</th>
          </tr>
          <tr>
            <td>Nom, Prénom</td>
            <td>IBRAHIMI Mohamed</td>
          </tr>
          <tr>
            <td>Numéro de téléphone</td>
            <td>+212608229938</td>
          </tr>
          <tr>
            <td>Adresse</td>
            <td>Hay ouled yahya oujda 60020, n°29</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>mohamedibrahimi2018@gmail.com</td>
          </tr>
        </table>
      </section>
      <section id="2">
        <h2 className="text-xl font-semibold">Objectifs</h2>
        <ul>
          <li>Avoir un diplôme d'ingénieur en génie Informatique et Digitalisation</li>
          <li>Trouver des Solutions Digitales pour les problèmes modernes</li>
          <li>Répondre aux besoins numériques des entreprises</li>
        </ul>
      </section>
      <section id="3">
        <h2 className="text-xl font-semibold">Diplômes</h2>
        <table>
          <tr>
            <th>Diplôme</th>
            <th>Mention</th>
          </tr>
          <tr>
            <td>Baccalauréat sciences Mathématiques A</td>
            <td>Très bien</td>
          </tr>
          <tr>
            <td>Deux années aux CPGE</td>
            <td>685</td>
          </tr>
          <tr>
            <td>En train de se former au sein de l'école Mohammadia des ingénieurs - Génie Informatique et Digitalisation</td>
            <td>
              <em>pas encore</em>
            </td>
          </tr>
        </table>
      </section>
      <section id="4">
        <h2 className="text-xl font-semibold">Compétences techniques</h2>
        <ul>
          <li>Programmation Python</li>
        </ul>
      </section>

      <section id="5">
        <h2 className="text-xl font-semibold">Compétences linguistiques</h2>
        <ul>
          <li>Arabe</li>
          <li>Anglais</li>
          <li>Français</li>
        </ul>
      </section>
      <section id="6">
        <h2 className="text-xl font-semibold">Autres</h2>
        <p>
          J'aspire à apprendre et comprendre tout ce que je peux; Le domaine de l'informatique est assez <em>prometteur</em>
        </p>
      </section>
    </div>
  );
};
