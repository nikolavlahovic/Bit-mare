import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AdminPage from './pages/AdminPage'
import CandidatePage from './pages/CandidatePage'
import WizardPage from './pages/WizardPage'
import CandidateInfoPage from './pages/CandidateInfoPage'
import Header from './components/Header'
import Footer from './components/Footer'
import AdminReports from './pages/AdminReports'
import AdminCreateReports from './pages/AdminCreateReports'
import LoginModal from "./components/LogInModal"

const App = () => {

  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [adminReports, setAdminReports] = useState([])
  const [companies, setCompanies] = useState([]);
  // stefan komentar!!! pogledati
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [freshData, setFreshData] = useState(false)


  function fetchDataCandidates() {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((data) => {
        setCandidates(data);
        console.log(data);
      });
  }

  function fetchDataReports() {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((data) => {
        setAdminReports(data);
      });
  }
  function fetchDataCompanies() {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
        console.log(data);
      });
  }

  // function fetchImages() {
  //   fetch(`https://randomuser.me/api/?results=${candidates.length}`)
  //     .then(res => res.json())
  //     .then(data => setImages(data?.results))
  // }

  useEffect(() => {

    fetchDataCandidates()
    fetchDataCompanies()

  }, [])

  useEffect(() => {

    fetchDataReports()
    // fetchImages();

  }, [freshData])



  return (
    <div className='app'>
      {/* {stefan komentar pogledati skrivene rute} */}
      {token && <BrowserRouter  >
        <Header />
        <Routes >
          <Route path="/" element={<HomePage token={token} />} />
          {/* <Route path="/admin-login" element={<LoginModal setToken={setToken} token={token} />} /> */}
          <Route path="/candidates" element={<CandidatePage setSelectedCandidate={setSelectedCandidate} candidates={candidates} />} />
          <Route path="/candidateInfo" element={<CandidateInfoPage data={selectedCandidate} />} />
          <Route path="/admin" element={<AdminPage setToken={setToken}/>} />
          <Route path="/wizard" element={<WizardPage setSelectedCandidate={setSelectedCandidate} setFreshData={setFreshData} token={token} candidates={candidates} companies={companies} setCompanies={setCompanies} />} />
          <Route path="/adminReports" element={<AdminReports adminReports={adminReports} token={token} setFreshData={setFreshData} />} />
          <Route path="/adminCreateReports" element={<AdminCreateReports />} />
        </Routes>
        <Footer />
      </BrowserRouter>}

      {!token && <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" element={<HomePage token={token} />} />
          <Route path="/admin-login" element={<LoginModal setToken={setToken} token={token} />} />
          <Route path="/candidates" element={<CandidatePage setSelectedCandidate={setSelectedCandidate} candidates={candidates} />} />
          <Route path="/candidateInfo" element={<CandidateInfoPage data={selectedCandidate} />} />
          {/* <Route path='*' render={() => <Navigate to="/" replace />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>}


    </div>
  )
}

export default App
