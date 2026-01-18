### 1. Animasi Utama: **Morph Animation**

Animasi ini membuat bentuk foto berubah-ubah secara organis (blob-like morphing effect).

**CSS Keyframe:**

css

```css
@keyframes morph {
  0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50%  { border-radius: 30% 60% 70% 40% / 50% 60% 30%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}
```

**Properties Animasi:**

- **Duration:** 8 detik
- **Timing Function:** ease-in-out
- **Delay:** 1 detik
- **Iteration Count:** infinite (berulang terus-menerus)
- **Direction:** normal

### 2. Efek Visual Garis Melingkar

Garis melingkar semi-transparan yang terlihat di sekitar foto bukan merupakan animasi terpisah, melainkan efek `box-shadow: inset`:

css

`box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 0px 9px inset;`

Ini menciptakan border dalam setebal **9px** dengan warna putih opacity **30%**, yang mengikuti perubahan bentuk dari animasi morph.

### 3. Struktur Elemen

**Container `.avatar`:**

- Ukuran: 300px × 300px
- Position: relative
- Border-radius: 100% (menjaga batas lingkaran)

**Image Element `.avatar_img`:**

- Position: absolute (inset: 0)
- Background-size: cover
- Background-blend-mode: multiply (efek grayscale)
- Overflow: hidden

### 4. Requirements untuk Implementasi

Jika Anda ingin membuat efek serupa, berikut yang diperlukan:

**CSS:**

css

`.avatar {
width: 300px;
height: 300px;
position: relative;
border-radius: 100%;
}

.avatar .image {
position: absolute;
inset: 0;
background-size: cover;
background-position: center;
animation: morph 8s ease-in-out 1s infinite;
box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 0px 9px inset;
border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
overflow: hidden;
}`

**Teknik yang Digunakan:**

- CSS `border-radius` dengan 8 nilai untuk membuat bentuk organis
- CSS Keyframe Animation untuk transisi bentuk yang halus
- Inset box-shadow untuk efek border yang mengikuti bentuk