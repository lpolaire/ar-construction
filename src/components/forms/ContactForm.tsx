'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const EMPTY = { name: '', email: '', phone: '', message: '' }

export function ContactForm() {
  const [form, setForm] = useState(EMPTY)
  const [pending, setPending] = useState(false)

  // Phase 4: replace with a Server Action (Zod validation + Resend + Lead storage).
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPending(true)
    await new Promise((r) => setTimeout(r, 400))
    toast.success('Demande envoyée.', {
      description: 'Notre équipe vous contactera sous 24 h.',
    })
    setForm(EMPTY)
    setPending(false)
  }

  return (
    <form
      onSubmit={submit}
      className="bg-card rounded-lg p-8 lg:p-10 shadow-[var(--shadow-card)] border border-border/70 space-y-5"
    >
      <div>
        <label htmlFor="cf-name" className="text-sm font-semibold text-foreground mb-2 block">
          Nom complet
        </label>
        <Input
          id="cf-name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Jean Tremblay"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-email" className="text-sm font-semibold text-foreground mb-2 block">
            Courriel
          </label>
          <Input
            id="cf-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="vous@exemple.com"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="text-sm font-semibold text-foreground mb-2 block">
            Téléphone
          </label>
          <Input
            id="cf-phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="418 000-0000"
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="text-sm font-semibold text-foreground mb-2 block">
          Votre projet
        </label>
        <Textarea
          id="cf-message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Décrivez votre projet de construction ou rénovation..."
        />
      </div>
      <Button type="submit" size="lg" className="w-full h-13" disabled={pending}>
        {pending ? 'ENVOI…' : 'ENVOYER MA DEMANDE'}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Réponse garantie sous 24 heures ouvrables.
      </p>
    </form>
  )
}
