import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface Registration {
  id?: string;
  name: string;
  birthDate: string; // "YYYY-MM-DD"
  address: string;
  cpf: string;
  email: string;
  instagram?: string;
  phone: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export type CreateRegistrationData = Omit<
  Registration,
  "id" | "createdAt" | "updatedAt"
>;
export type UpdateRegistrationData = Partial<CreateRegistrationData>;

// ─── Constante da coleção ─────────────────────────────────────────────────────

const COLLECTION = "registrations";

// ─── CREATE ───────────────────────────────────────────────────────────────────

export async function createRegistration(
  data: CreateRegistrationData,
): Promise<Registration> {
  const payload = {
    ...data,
    cpf: data.cpf.replace(/\D/g, ""), // salva só números
    phone: data.phone.replace(/\D/g, ""), // salva só números
    instagram: data.instagram?.replace(/^@/, ""), // remove @ se vier
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  };

  const docRef = await addDoc(collection(db, COLLECTION), payload);

  return { id: docRef.id, ...payload };
}

// ─── READ — todos ─────────────────────────────────────────────────────────────

export async function getAllRegistrations(): Promise<Registration[]> {
  const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<Registration, "id">),
  }));
}

// ─── READ — por ID ────────────────────────────────────────────────────────────

export async function getRegistrationById(
  id: string,
): Promise<Registration | null> {
  const docRef = doc(db, COLLECTION, id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) return null;

  return { id: snapshot.id, ...(snapshot.data() as Omit<Registration, "id">) };
}

// ─── READ — por email (útil para checar duplicatas) ───────────────────────────

export async function getRegistrationByEmail(
  email: string,
): Promise<Registration | null> {
  const q = query(
    collection(db, COLLECTION),
    where("email", "==", email.toLowerCase().trim()),
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  const d = snapshot.docs[0];
  return { id: d.id, ...(d.data() as Omit<Registration, "id">) };
}

// ─── READ — por CPF (útil para checar duplicatas) ─────────────────────────────

export async function getRegistrationByCpf(
  cpf: string,
): Promise<Registration | null> {
  const cleanCpf = cpf.replace(/\D/g, "");

  const q = query(collection(db, COLLECTION), where("cpf", "==", cleanCpf));

  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  const d = snapshot.docs[0];
  return { id: d.id, ...(d.data() as Omit<Registration, "id">) };
}

// ─── UPDATE ───────────────────────────────────────────────────────────────────

export async function updateRegistration(
  id: string,
  data: UpdateRegistrationData,
): Promise<void> {
  const docRef = doc(db, COLLECTION, id);

  const payload: Record<string, unknown> = {
    ...data,
    updatedAt: Timestamp.now(),
  };

  if (data.cpf) payload.cpf = data.cpf.replace(/\D/g, "");
  if (data.phone) payload.phone = data.phone.replace(/\D/g, "");
  if (data.instagram) payload.instagram = data.instagram.replace(/^@/, "");

  await updateDoc(docRef, payload);
}

// ─── DELETE ───────────────────────────────────────────────────────────────────

export async function deleteRegistration(id: string): Promise<void> {
  const docRef = doc(db, COLLECTION, id);
  await deleteDoc(docRef);
}
