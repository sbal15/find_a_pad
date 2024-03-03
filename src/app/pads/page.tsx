import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Head from 'next/head'

export default function Ced() {
  const locationsData = [
    {
      "name": "Meredith South",
      "description": "Bathroom next to elevator on floor 2",
      "rating": 5
    },
    {
      "name": "Meredith",
      "description": "Bathroom in main lobby",
      "rating": 3
    }
  ];
  

  return (
    <div className="bg-pink-500 py-4">
      <div className="max-w-3xl mx-auto bg-pink-500">
        <Tabs defaultValue="account">
          <TabsList className="flex justify-center">
            <TabsTrigger value="current" className="py-6 px-8 bg-gray-200 rounded-tl-lg rounded-bl-lg cursor-pointer hover:bg-pink-500">Pad Locations</TabsTrigger>
            <TabsTrigger value="create" className="py-6 px-8 bg-gray-200 rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-pink-500">Add a Pin</TabsTrigger>
          </TabsList>
          <TabsContent value="current"> 
            <div className="container mx-auto">
              <Head>
                <title>Location Table</title>
                <meta name="description" content="Location table example" />
                <link rel="icon" href="/favicon.ico" />
              </Head>

              <h1 className="text-3xl font-bold mb-6 mt-8 text-center">Locations</h1>
              
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-6 border-b border-gray-200 text-gray-800 font-semibold text-sm">Location Name</th>
                    <th className="py-4 px-6 border-b border-gray-200 text-gray-800 font-semibold text-sm">Description</th>
                    <th className="py-4 px-6 border-b border-gray-200 text-gray-800 font-semibold text-sm">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {locationsData.map((location, index) => (
                    <tr key={index} className={(index % 2 === 0) ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 border-b border-gray-200">{location.name}</td>
                      <td className="py-4 px-6 border-b border-gray-200">{location.description}</td>
                      <td className="py-4 px-6 border-b border-gray-200">{location.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="create">
            <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-pink-600">Place Review</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="placeName" className="block text-sm font-semibold text-gray-600">Place Name:</label>
                  <input
                    type="text"
                    id="placeName"
                    name="placeName"
                    placeholder="Enter place name"
                    required
                    className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-600">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Enter description"
                    rows={4}
                    required
                    className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="rating" className="block text-sm font-semibold text-gray-600">Rating:</label>
                  <select
                    id="rating"
                    name="rating"
                    required
                    className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Select Rating</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                </div>

                <button type="submit" className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none focus:bg-pink-700">Submit</button>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
