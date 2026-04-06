import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Phone, Store, LogOut, Plus, X, Search, Activity, PackageX, CheckCircle2 } from 'lucide-react';

function AdminDashboard() {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [leads, setLeads] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Lead State
  const [newMobile, setNewMobile] = useState('');
  const [newStoreName, setNewStoreName] = useState('');
  const [newStage, setNewStage] = useState('2-5 Stores');
  const [newProblems, setNewProblems] = useState('');

  const fetchLeads = () => {
    if (!token) return;
    fetch('http://localhost:3001/api/leads', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(r => r.json())
    .then(data => {
      if (data.error) {
        setError(data.error);
        handleLogout();
      } else {
        setLeads(data);
      }
    })
    .catch(e => setError(e.message));
  };

  useEffect(() => {
    fetchLeads();
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        localStorage.setItem('adminToken', data.token);
      } else {
        setError(data.error);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('adminToken');
  };

  const handleAddLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        mobile: newMobile,
        storeName: newStoreName,
        stage: newStage,
        problems: newProblems.split(',').map(p => p.trim()).filter(p => p)
      };

      const res = await fetch('http://localhost:3001/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        setIsAddModalOpen(false);
        setNewMobile('');
        setNewStoreName('');
        setNewProblems('');
        fetchLeads(); // Refresh table
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-[#111] p-10 rounded-3xl shadow-[0_0_50px_rgba(99,153,34,0.1)] w-full max-w-sm border border-[#222]"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#639922] to-[#B8D88E] flex items-center justify-center">
              <Store className="w-8 h-8 text-black" />
            </div>
          </div>
          <h2 className="text-3xl font-black text-white mb-2 text-center tracking-tight">Nirvriksh OS</h2>
          <p className="text-neutral-500 text-center mb-8 text-sm">Secure Admin Environment</p>
          
          {error && <p className="text-red-400 mb-4 text-sm text-center bg-red-900/20 p-2 rounded-lg">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-neutral-400 text-sm font-medium mb-2">Email</label>
              <input type="text" 
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-4 text-white focus:outline-none focus:border-[#639922] transition-colors"
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mb-8">
              <label className="block text-neutral-400 text-sm font-medium mb-2">Password</label>
              <input type="password" 
                className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-4 text-white focus:outline-none focus:border-[#639922] transition-colors"
                value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="w-full bg-[#639922] hover:bg-[#4F7A1B] text-white py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(99,153,34,0.3)]">
              System Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const filteredLeads = leads.filter(l => 
    l.mobile.includes(search) || (l.storeName && l.storeName.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-200 font-sans p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Options */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#111] p-6 rounded-3xl border border-[#222]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#639922]/20 flex items-center justify-center border border-[#639922]/30">
              <Activity className="w-6 h-6 text-[#639922]" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">CRM Command Center</h1>
              <p className="text-neutral-500 text-sm">Managing {leads.length} Active Leads</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="bg-white text-black hover:bg-neutral-200 px-5 py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center gap-2 shadow-lg"
            >
              <Plus className="w-4 h-4" /> Add Manual Lead
            </button>
            <button onClick={handleLogout} className="px-5 py-2.5 border border-[#333] text-neutral-400 rounded-xl hover:bg-[#222] hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#111] border border-[#222] p-6 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-[#DAA520] w-5 h-5" /> <h3 className="text-neutral-400 font-medium">Total Audits</h3>
            </div>
            <p className="text-4xl font-black text-white">{leads.length}</p>
          </div>
          <div className="bg-[#111] border border-[#222] p-6 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Store className="text-blue-400 w-5 h-5" /> <h3 className="text-neutral-400 font-medium">MNC / 5+ Stores</h3>
            </div>
            <p className="text-4xl font-black text-white">
              {leads.filter(l => l.stage === '5+ Stores').length}
            </p>
          </div>
          <div className="bg-[#111] border border-[#222] p-6 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <PackageX className="text-red-400 w-5 h-5" /> <h3 className="text-neutral-400 font-medium">Staff Theft Reports</h3>
            </div>
            <p className="text-4xl font-black text-white">
              {leads.filter(l => l.problems && l.problems.some((p:string) => p.includes('Theft') || p.includes('Pilferage'))).length}
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-[#111] border border-[#222] rounded-3xl overflow-hidden shadow-2xl flex flex-col">
          <div className="p-6 border-b border-[#222] flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-bold text-white">Recent Conversions</h2>
            <div className="relative w-full sm:w-64">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input 
                type="text" 
                placeholder="Search phone or store..." 
                className="w-full bg-[#1A1A1A] border border-[#333] text-white rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#639922]"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] border-b border-[#222] text-neutral-400 text-xs tracking-wider uppercase font-bold">
                  <th className="p-5">Time Captured</th>
                  <th className="p-5">Contact</th>
                  <th className="p-5">Store Identity</th>
                  <th className="p-5">Pain Points Detected</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222]">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#1A1A1A]/50 transition-colors group">
                    <td className="p-5 whitespace-nowrap text-sm text-neutral-400">
                      {new Date(lead.createdAt).toLocaleDateString()} <span className="text-neutral-600 block text-xs">{new Date(lead.createdAt).toLocaleTimeString()}</span>
                    </td>
                    <td className="p-5 font-bold text-white flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#639922]" /> {lead.mobile}
                    </td>
                    <td className="p-5 text-sm">
                      <div className="text-white font-medium text-base mb-1">{lead.storeName || 'Unknown Store'}</div>
                      <span className="inline-block px-2 py-1 bg-[#333] text-neutral-300 rounded text-xs">{lead.stage || 'N/A'}</span>
                    </td>
                    <td className="p-5 text-sm">
                      <div className="flex flex-wrap gap-2">
                        {lead.problems && lead.problems.map((p: string, i: number) => (
                          <span key={i} className="px-3 py-1 bg-red-900/20 text-red-400 border border-red-900/50 rounded-lg text-xs font-semibold">
                            {p}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredLeads.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-12 text-center text-neutral-500">
                      <PackageX className="w-12 h-12 mx-auto mb-4 opacity-20" />
                      No audits or leads match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Manual Add Lead Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsAddModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111] border border-[#333] p-8 rounded-3xl shadow-2xl relative w-full max-w-lg z-10"
            >
              <button onClick={() => setIsAddModalOpen(false)} className="absolute top-6 right-6 text-neutral-500 hover:text-white">
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-white mb-2">Create Store Lead</h2>
              <p className="text-neutral-500 text-sm mb-6">Manually input a store owner into your ecosystem CRM.</p>
              
              <form onSubmit={handleAddLead} className="space-y-4">
                <div>
                  <label className="block text-neutral-400 text-sm font-medium mb-2">Mobile Number *</label>
                  <input required type="tel" className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-3 text-white focus:outline-none focus:border-[#639922]"
                    value={newMobile} onChange={e => setNewMobile(e.target.value)} placeholder="+91 " />
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm font-medium mb-2">Store Name</label>
                  <input type="text" className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-3 text-white focus:outline-none focus:border-[#639922]"
                    value={newStoreName} onChange={e => setNewStoreName(e.target.value)} placeholder="e.g. Trendy Collections" />
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm font-medium mb-2">Scale / Stage</label>
                  <select className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-3 text-white focus:outline-none focus:border-[#639922]"
                    value={newStage} onChange={e => setNewStage(e.target.value)}>
                    <option>Just 1</option>
                    <option>2-5 Stores</option>
                    <option>5+ Stores</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm font-medium mb-2">Identified Problems (Comma Separated)</label>
                  <input type="text" className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-3 text-white focus:outline-none focus:border-[#639922]"
                    value={newProblems} onChange={e => setNewProblems(e.target.value)} placeholder="Dead Stock, Pilferage..." />
                </div>
                
                <button type="submit" className="w-full mt-4 bg-[#639922] hover:bg-[#4F7A1B] text-white py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(99,153,34,0.3)] flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Save Lead to CRM
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default AdminDashboard;;
