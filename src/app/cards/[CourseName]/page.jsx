'use client'
import Link from "next/link";
import { Navigation } from "@/app/components/Navigation";
import { use } from "react";


export default function DescriptionPage({ params }) {
  const { CourseName } = use(params);
  return (
    <div >
      <Navigation/>
    <div className="min-h-screen flex flex-col items-center py-12 px-4 pt-70 bg-red-200">
      <h1 className="font-serif text-8xl text-zinc-600 absolute top-20 font-semibold ">Coding Ninjas</h1>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {CourseName}
        </h1>
        <p className="text-gray-700 mb-6">
          Welcome to the <span className="font-semibold">{CourseName}</span> course! Here you’ll find a comprehensive overview, key learning objectives, and all the resources you need to succeed.
        </p>
        <dl className="divide-y divide-gray-200">
          <div className="py-4 flex flex-col sm:flex-row sm:justify-between">
            <dt className="text-sm font-medium text-gray-500">Instructor</dt>
            <dd className="text-sm text-gray-900">Jane Doe</dd>
          </div>
          <div className="py-4 flex flex-col sm:flex-row sm:justify-between">
            <dt className="text-sm font-medium text-gray-500">Duration</dt>
            <dd className="text-sm text-gray-900">8 weeks</dd>
          </div>
          <div className="py-4 flex flex-col sm:flex-row sm:justify-between">
            <dt className="text-sm font-medium text-gray-500">Level</dt>
            <dd className="text-sm text-gray-900">Intermediate</dd>
          </div>
        </dl>
        <div className="mt-8 flex justify-end">
          <Link
            href={`/cards/${CourseName}`}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Enroll
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
