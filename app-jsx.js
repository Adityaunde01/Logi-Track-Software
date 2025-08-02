import React, { useState, useEffect } from 'react';
import { Package, Truck, MapPin, Clock, Search, Plus, BarChart3, Users, Settings } from 'lucide-react';

const LogiTrackDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [shipments, setShipments] = useState([
    {
      id: 'LT001',
      trackingNumber: 'TRK123456789',
      origin: 'Mumbai, India',
      destination: 'Delhi, India',
      status: 'In Transit',
      estimatedDelivery: '2025-08-05',
      carrier: 'Express Logistics',
      weight: '2.5 kg',
      customer: 'John Doe'
    },
    {
      id: 'LT002',
      trackingNumber: 'TRK987654321',
      origin: 'Pune, India',
      destination: 'Bangalore, India',
      status: 'Delivered',
      estimatedDelivery: '2025-08-01',
      carrier: 'Speed Cargo',
      weight: '1.2 kg',
      customer: 'Jane Smith'
    },
    {
      id: 'LT003',
      trackingNumber: 'TRK456789123',
      origin: 'Chennai, India',
      destination: 'Kolkata, India',
      status: 'Processing',
      estimatedDelivery: '2025-08-07',
      carrier: 'Quick Transport',
      weight: '3.8 kg',
      customer: 'Mike Johnson'
    }
  ]);
  
  const [newShipment, setNewShipment] = useState({
    trackingNumber: '',
    origin: '',
    destination: '',
    carrier: '',
    weight: '',
    customer: ''
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'In Transit': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Delayed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddShipment = () => {
    if (newShipment.trackingNumber && newShipment.origin && newShipment.destination) {
      const shipment = {
        id: `LT${String(shipments.length + 1).padStart(3, '0')}`,
        ...newShipment,
        status: 'Processing',
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      };
      setShipments([...shipments, shipment]);
      setNewShipment({
        trackingNumber: '',
        origin: '',
        destination: '',
        carrier: '',
        weight: '',
        customer: ''
      });
    }
  };

  const DashboardStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Shipments</p>
            <p className="text-2xl font-bold text-gray-900">{shipments.length}</p>
          </div>
          <Package className="h-8 w-8 text-blue-500" />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">In Transit</p>
            <p className="text-2xl font-bold text-gray-900">
              {shipments.filter(s => s.status === 'In Transit').length}
            </p>
          </div>
          <Truck className="h-8 w-8 text-green-500" />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Delivered</p>
            <p className="text-2xl font-bold text-gray-900">
              {shipments.filter(s => s.status === 'Delivered').length}
            </p>
          </div>
          <MapPin className="h-8 w-8 text-purple-500" />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Processing</p>
            <p className="text-2xl font-bold text-gray-900">
              {shipments.filter(s => s.status === 'Processing').length}
            </p>
          </div>
          <Clock className="h-8 w-8 text-orange-500" />
        </div>
      </div>
    </div>
  );

  const ShipmentTable = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Recent Shipments</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tracking Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Route
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ETA
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {shipments.map((shipment) => (
              <tr key={shipment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {shipment.trackingNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {shipment.origin} → {shipment.destination}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(shipment.status)}`}>
                    {shipment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {shipment.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {shipment.estimatedDelivery}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const AddShipmentForm = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Add New Shipment</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tracking Number
            </label>
            <input
              type="text"
              value={newShipment.trackingNumber}
              onChange={(e) => setNewShipment({...newShipment, trackingNumber: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="TRK123456789"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Customer Name
            </label>
            <input
              type="text"
              value={newShipment.customer}
              onChange={(e) => setNewShipment({...newShipment, customer: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Origin
            </label>
            <input
              type="text"
              value={newShipment.origin}
              onChange={(e) => setNewShipment({...newShipment, origin: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mumbai, India"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Destination
            </label>
            <input
              type="text"
              value={newShipment.destination}
              onChange={(e) => setNewShipment({...newShipment, destination: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Delhi, India"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Carrier
            </label>
            <input
              type="text"
              value={newShipment.carrier}
              onChange={(e) => setNewShipment({...newShipment, carrier: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Express Logistics"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight
            </label>
            <input
              type="text"
              value={newShipment.weight}
              onChange={(e) => setNewShipment({...newShipment, weight: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="2.5 kg"
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={handleAddShipment}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Shipment
          </button>
        </div>
      </div>
    </div>
  );

  const TrackingSearch = () => {
    const [trackingQuery, setTrackingQuery] = useState('');
    
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Track Shipment</h3>
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={trackingQuery}
              onChange={(e) => setTrackingQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter tracking number..."
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2">
            <Search className="h-4 w-4" />
            Track
          </button>
        </div>
        
        {trackingQuery && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium text-gray-900 mb-2">Tracking Results</h4>
            {shipments
              .filter(s => s.trackingNumber.toLowerCase().includes(trackingQuery.toLowerCase()))
              .map(shipment => (
                <div key={shipment.id} className="bg-white p-4 rounded-md border">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium text-gray-900">{shipment.trackingNumber}</h5>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(shipment.status)}`}>
                      {shipment.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    From: {shipment.origin} → To: {shipment.destination}
                  </p>
                  <p className="text-sm text-gray-600">
                    Customer: {shipment.customer} | ETA: {shipment.estimatedDelivery}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">LogiTrack</h1>
            </div>
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'dashboard'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('track')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'track'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Track
              </button>
              <button
                onClick={() => setActiveTab('add')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'add'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Add Shipment
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <div>
            <DashboardStats />
            <ShipmentTable />
          </div>
        )}
        
        {activeTab === 'track' && <TrackingSearch />}
        
        {activeTab === 'add' && <AddShipmentForm />}
      </main>
    </div>
  );
};

export default LogiTrackDashboard;