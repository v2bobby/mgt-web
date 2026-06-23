import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Product from './pages/Product'
import BusinessModel from './pages/BusinessModel'
import Demo from './pages/Demo'
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'
import About from './pages/About'
import Founder from './pages/Founder'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/business-model" element={<BusinessModel />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
      </Routes>
    </Layout>
  )
}
