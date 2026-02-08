 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/confirmation.js b/confirmation.js
index 5d4cc86d8d8846646b2aba1e94f90b5aa1c2443e..cbad673a187ca7f42d45c70200f8641905809468 100644
--- a/confirmation.js
+++ b/confirmation.js
@@ -1,20 +1,20 @@
-// Conteúdo de confirmation.js - Versão Atualizada
-
-document.addEventListener('DOMContentLoaded', () => {
-    
-    // Define o tempo em milissegundos para esperar antes de redirecionar.
-    // 8000 milissegundos = 8 segundos.
-    const redirectDelay = 8000;
-
-    console.log(`Redirecionando para a página inicial em ${redirectDelay / 1000} segundos...`);
-
-    // A função setTimeout executa o código uma vez após o tempo especificado.
-    setTimeout(() => {
-        // Redireciona o usuário para a página inicial.
-        window.location.href = 'index.html';
-    }, redirectDelay);
-
-    /* O código anterior da contagem regressiva (setInterval) foi removido 
-    para implementar este redirecionamento automático e rápido.
-    */
-});
\ No newline at end of file
+document.addEventListener('DOMContentLoaded', () => {
+    const countdownElement = document.getElementById('redirect-countdown');
+    let remainingSeconds = 8;
+
+    const updateCountdown = () => {
+        if (countdownElement) {
+            countdownElement.textContent = remainingSeconds.toString();
+        }
+
+        if (remainingSeconds <= 0) {
+            window.location.href = 'index.html';
+            return;
+        }
+
+        remainingSeconds -= 1;
+    };
+
+    updateCountdown();
+    setInterval(updateCountdown, 1000);
+});
 
EOF
)
