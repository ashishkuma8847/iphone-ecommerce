import React, { useState } from "react";

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu open/close
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            {/* Menu Button */}
            <button
                onClick={toggleMenu}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Menu
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        marginTop: "5px",
                        padding: "10px",
                        backgroundColor: "#FFF",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "5px",
                        zIndex: "1000",
                    }}
                >
                    <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
                        <li
                            style={{
                                padding: "8px 12px",
                                cursor: "pointer",
                                borderBottom: "1px solid #ddd",
                            }}
                            onClick={() => alert("Option 1 clicked")}
                        >
                            Option 1
                        </li>
                        <li
                            style={{
                                padding: "8px 12px",
                                cursor: "pointer",
                                borderBottom: "1px solid #ddd",
                            }}
                            onClick={() => alert("Option 2 clicked")}
                        >
                            Option 2
                        </li>
                        <li
                            style={{
                                padding: "8px 12px",
                                cursor: "pointer",
                            }}
                            onClick={() => alert("Option 3 clicked")}
                        >
                            Option 3
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
