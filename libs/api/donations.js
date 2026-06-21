"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDonation = initializeDonation;
exports.verifyDonation = verifyDonation;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://disabilities-hope-and-recovery.onrender.com";
async function initializeDonation(payload) {
    const res = await fetch(`${API_BASE_URL}/api/donations/initialize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data?.message || "Failed to start donation");
    }
    return data;
}
async function verifyDonation(reference) {
    const res = await fetch(`${API_BASE_URL}/api/donations/verify/${encodeURIComponent(reference)}`);
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data?.message || "Failed to verify donation");
    }
    return data;
}
