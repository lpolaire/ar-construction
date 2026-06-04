'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const EMPTY = { prenom: '', nom: '', email: '', phone: '', sujet: 'maison-neuve', message: '' }

const subjects = [
  { value: 'maison-neuve', label: 'Maison neuve clé en main' },
  { value: 'renovation', label: 'Rénovation résidentielle' },
  { value: 'renovation-com', label: 'Rénovation commerciale' },
  { value: 'autoconstructeur', label: 'Forfait autoconstructeur' },
  { value: 'terrain', label: 'Terrain à vendre' },
  { value: 'carriere', label: 'Opportunité de carrière' },
  { value: 'autre', label: 'Autre demande' },
]

export function ContactDetailedForm() {
  const [form, setForm] = useState(EMPTY)
  const [pending, setPending] = useState(false)

  // Phase 4: replace with a Server Action (Zod + Resend + Lead storage + anti-spam).
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPending(true)
    await new Promise((r) => setTimeout(r, 400))
    toast.success('Message envoyé.', {
      description: 'Notre équipe vous contactera sous 24 heures ouvrables.',
    })
    setForm(EMPTY)
    setPending(false)
  }

  return (
    <form
      onSubmit={submit}
      className="lg:col-span-3 bg-card rounded-lg p-8 lg:p-10 shadow-[var(--shadow-card)] border border-border/70 space-y-5"
    >
      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Votre message</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="prenom" className="text-sm font-semibold text-foreground mb-2 block">
            Prénom *
          </label>
          <Input
            id="prenom"
            required
            value={form.prenom}
            onChange={(e) => setForm({ ...form, prenom: e.target.value })}
            placeholder="Jean"
          />
        </div>
        <div>
          <label htmlFor="nom" className="text-sm font-semibold text-foreground mb-2 block">
            Nom de famille *
          </label>
          <Input
            id="nom"
            required
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            placeholder="Tremblay"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-foreground mb-2 block">
            Courriel *
          </label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="vous@exemple.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-foreground mb-2 block">
            Téléphone
          </label>
          <Input
            id="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="418 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="sujet" className="text-sm font-semibold text-foreground mb-2 block">
          Sujet de votre demande
        </label>
        <select
          id="sujet"
          value={form.sujet}
          onChange={(e) => setForm({ ...form, sujet: e.target.value })}
          className="flex h-11 w-full rounded-md border border-input bg-card px-4 py-2 text-sm text-foreground transition-all focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
        >
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-foreground mb-2 block">
          Votre message *
        </label>
        <Textarea
          id="message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Décrivez votre projet ou posez-nous vos questions..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full h-13" disabled={pending}>
        {pending ? 'ENVOI…' : 'ENVOYER MON MESSAGE'} <ArrowRight className="ml-1.5" size={16} />
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Réponse garantie sous 24 heures ouvrables. Aucun engagement.
      </p>
    </form>
  )
}
