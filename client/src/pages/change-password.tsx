import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Eye, EyeOff, ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";
import "./change-password.css";

export default function ChangePasswordPage() {
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const changePasswordMutation = useMutation({
    mutationFn: async (data: { currentPassword: string; newPassword: string }) => {
      const res = await apiRequest("POST", "/api/change-password", data);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Le mot de passe n'a pas pu être modifié.");
      }
      return res.json();
    },
    onSuccess: () => {
      toast({ title: "Succès", description: "Mot de passe modifié avec succès" });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      navigate("/account");
    },
    onError: (error: Error) => {
      toast({ title: "Modification du mot de passe impossible", description: error.message, variant: "destructive" });
    },
  });

  const handleSubmit = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast({ title: "Champs requis", description: "Veuillez remplir tous les champs", variant: "destructive" });
      return;
    }
    if (newPassword.length < 6) {
      toast({ title: "Mot de passe trop court", description: "Minimum 6 caractères requis", variant: "destructive" });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({ title: "Confirmation du mot de passe impossible", description: "Les nouveaux mots de passe ne correspondent pas", variant: "destructive" });
      return;
    }
    changePasswordMutation.mutate({ currentPassword, newPassword });
  };

  return (
    <main className="cp-password-page">
      <div className="cp-password-screen">
        <header className="cp-password-header">
          <button
            onClick={() => navigate("/account")}
            className="cp-password-back"
            data-testid="button-back"
          >
            <ChevronLeft aria-hidden="true" />
            <span>Retour</span>
          </button>
          <h1>Changer le mot de passe</h1>
        </header>

        <form
          className="cp-password-form"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <div className="cp-password-group">
            <label htmlFor="current-password">Ancien mot de passe</label>
            <div className="cp-password-field">
              <input
                id="current-password"
                type={showCurrent ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                data-testid="input-current-password"
              />
              <button
                type="button"
                className="cp-password-visibility"
                onClick={() => setShowCurrent(!showCurrent)}
                aria-label={showCurrent ? "Masquer l'ancien mot de passe" : "Afficher l'ancien mot de passe"}
              >
                {showCurrent ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
              </button>
            </div>
          </div>

          <div className="cp-password-group">
            <label htmlFor="new-password">Nouveau mot de passe</label>
            <div className="cp-password-field">
              <input
                id="new-password"
                type={showNew ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                data-testid="input-new-password"
              />
              <button
                type="button"
                className="cp-password-visibility"
                onClick={() => setShowNew(!showNew)}
                aria-label={showNew ? "Masquer le nouveau mot de passe" : "Afficher le nouveau mot de passe"}
              >
                {showNew ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
              </button>
            </div>
          </div>

          <div className="cp-password-group">
            <label htmlFor="confirm-password">Confirmer le mot de passe</label>
            <div className="cp-password-field">
              <input
                id="confirm-password"
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                data-testid="input-confirm-password"
              />
              <button
                type="button"
                className="cp-password-visibility"
                onClick={() => setShowConfirm(!showConfirm)}
                aria-label={showConfirm ? "Masquer la confirmation" : "Afficher la confirmation"}
              >
                {showConfirm ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={changePasswordMutation.isPending}
            className="cp-password-submit"
            data-testid="button-change-password-submit"
          >
            {changePasswordMutation.isPending ? (
              <span className="cp-password-loading">
                <Loader2 aria-hidden="true" />
                Modification...
              </span>
            ) : (
              "Confirmer"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
