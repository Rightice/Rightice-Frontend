"use client";

import { useState, useEffect } from "react";
import LawyerSidebar from "../Lawyer/LawyerSidebar";
import { Edit, Save, Check } from "lucide-react";
import Swal from "sweetalert2";

const getCurrentUserEmail = () => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  return user?.email || null;
};

const LawyerProfile = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [currentEmail, setCurrentEmail] = useState(getCurrentUserEmail());

  useEffect(() => {
    const loadUserProfile = () => {
      const email = getCurrentUserEmail();
      setCurrentEmail(email);
      if (email) {
        const key = `userProfile_${email}`;
        const stored = JSON.parse(localStorage.getItem(key));
        if (stored) {
          setUser(stored);
        } else {
          const legacy = JSON.parse(
            localStorage.getItem("userProfile") || "{}"
          );
          if (Object.keys(legacy).length > 0) {
            setUser(legacy);
            localStorage.setItem(key, JSON.stringify(legacy));
          }
        }
      }
    };

    loadUserProfile();

    const interval = setInterval(() => {
      const newEmail = getCurrentUserEmail();
      if (newEmail !== currentEmail) loadUserProfile();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentEmail]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setUser({ ...user, [name]: checked });
    } else if (type === "file") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, [name]: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleMultiSelect = (field, value) => {
    const currentValues = user[field] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    setUser({ ...user, [field]: newValues });
  };

  const saveUserProfile = (data) => {
    if (currentEmail) {
      const key = `userProfile_${currentEmail}`;
      localStorage.setItem(key, JSON.stringify(data));
      localStorage.setItem("userProfile", JSON.stringify(data));
      window.dispatchEvent(new Event("profileUpdated"));
      window.dispatchEvent(new Event("storage"));
    }
  };

  const isProfileComplete = (data) => {
    const required = [
      "username",
      "email",
      "phone",
      "address",
      "barId",
      "lawFirm",
      "experience",
      "expertise",
      "availableDays",
      "consultationTypes",
      "licenseUpload",
    ];
    return required.every((field) => data?.[field]?.trim());
  };

  const handleUpdate = () => {
    saveUserProfile(user);
    setEditMode(false);

    if (isProfileComplete(user)) {
      Swal.fire({
        icon: "success",
        title: "Profile Completed",
        text: "You can now access your appointments.",
      });
    }
  };

  const toggleEdit = () => setEditMode(!editMode);

  const fields = [
    { name: "username", label: "Username" },
    { name: "email", label: "Email" },
    { name: "gender", label: "Gender" },
    { name: "phone", label: "Phone" },
    { name: "address", label: "Address" },
    { name: "barId", label: "Bar Association ID" },
    { name: "lawFirm", label: "Law Firm Name" },
    { name: "experience", label: "Years of Experience" },
    { name: "country", label: "Country" },
    { name: "state", label: "State" },
    { name: "timeSlots", label: "Available Time Slots" },
  ];

  const multiSelects = [
    {
      name: "expertise",
      label: "Areas of Expertise",
      options: [
        "Family Law",
        "Criminal Law",
        "Corporate Law",
        "Intellectual Property",
        "Real Estate",
        "Immigration",
        "Tax Law",
        "Labor Law",
        "Environmental Law",
        "Bankruptcy",
      ],
    },
    {
      name: "languages",
      label: "Languages Spoken",
      options: [
        { value: "English", flag: "🇬🇧" },
        { value: "French", flag: "🇫🇷" },
        { value: "Spanish", flag: "🇪🇸" },
        { value: "German", flag: "🇩🇪" },
      ],
    },
    {
      name: "availableDays",
      label: "Available Days",
      options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
    {
      name: "consultationTypes",
      label: "Consultation Types",
      options: ["In-Person", "Video-call", "Phone-call", "Chat"],
    },
  ];

  const username = user?.username || "Guest";

  return (
    <LawyerSidebar>
      <div className="p-6">
        <p className="text-sm mb-6">Dashboard Overview</p>

        <section className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex flex-col items-center">
            {user.profileImage ? (
              <img
                src={user.profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-[#242E4D] text-[#BA986B] flex items-center justify-center text-4xl font-semibold">
                {username.charAt(0).toUpperCase()}
              </div>
            )}

            <label className="mt-3 flex items-center gap-2 cursor-pointer text-blue-600">
              <span className="text-[#242E4D] text-sm flex gap-1">
                <Edit className="w-4 h-4 mt-1" />
                Edit profile picture
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                name="profileImage"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl text-[#242E4D] font-semibold">
              Hello <span>{username}</span>
            </h1>
            <p className="font-light text-sm text-[#BA986B]">{user.email}</p>
          </div>
        </section>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.map(({ name, label }) => (
              <div key={name}>
                <label className="block text-md text-[#242E4D] mb-2 font-semibold">
                  {label}
                </label>
                {editMode ? (
                  <input
                    type="text"
                    name={name}
                    value={user[name] || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 focus:outline-none rounded px-3 py-2 text-sm text-black/70"
                  />
                ) : (
                  <p className="text-gray-800 border-b border-gray-200 pb-1">
                    {user[name] || "—"}
                  </p>
                )}
              </div>
            ))}

            {multiSelects.map(({ name, label, options }) => (
              <div key={name}>
                <label className="block text-md text-[#242E4D] mb-2 font-semibold">
                  {label}
                </label>
                {editMode ? (
                  <div className="flex flex-wrap gap-2">
                    {name === "languages"
                      ? options.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => handleMultiSelect(name, opt.value)}
                            className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5 cursor-pointer ${
                              (user[name] || []).includes(opt.value)
                                ? "bg-[#242E4D] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}>
                            <span>{opt.flag}</span>
                            <span>{opt.value}</span>
                            {(user[name] || []).includes(opt.value) && (
                              <Check className="w-3.5 h-3.5" />
                            )}
                          </button>
                        ))
                      : options.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleMultiSelect(name, opt)}
                            className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5 cursor-pointer ${
                              (user[name] || []).includes(opt)
                                ? "bg-[#242E4D] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}>
                            {opt}
                            {(user[name] || []).includes(opt) && (
                              <Check className="w-3.5 h-3.5" />
                            )}
                          </button>
                        ))}
                  </div>
                ) : (
                  <p className="text-gray-800 border-b border-gray-200 pb-1">
                    {name === "languages" ? (
                      <span>
                        {(user[name] || [])
                          .map((lang) => {
                            const langObj = options.find(
                              (opt) => opt.value === lang
                            );
                            return langObj ? (
                              <span key={lang} className="mr-2">
                                {langObj.flag} {lang}
                              </span>
                            ) : null;
                          })
                          .filter(Boolean).length > 0
                          ? null
                          : "—"}
                      </span>
                    ) : (
                      (user[name] || []).join(", ") || "—"
                    )}
                  </p>
                )}
              </div>
            ))}

            <div>
              <label className="block text-md font-semibold text-[#242E4D] mb-2 font-semibold">
                Upload License
              </label>
              {editMode ? (
                <input
                  type="file"
                  name="licenseUpload"
                  accept="application/pdf,image/*"
                  onChange={handleChange}
                  className="w-full"
                />
              ) : (
                <p className="text-gray-800">
                  {user.licenseUpload ? "Uploaded" : "—"}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8">
            {editMode ? (
              <button
                onClick={handleUpdate}
                className="flex items-center gap-2 text-white bg-[#242E4D] text-sm cursor-pointer px-6 py-3 rounded hover:bg-[#182038]">
                <Save className="w-4 h-4" /> Save Profile
              </button>
            ) : (
              <button
                onClick={toggleEdit}
                className="flex items-center gap-2 text-white bg-[#242E4D] text-sm cursor-pointer px-6 py-3 rounded hover:bg-[#182038]">
                <Edit className="w-4 h-4" /> Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </LawyerSidebar>
  );
};

export default LawyerProfile;
