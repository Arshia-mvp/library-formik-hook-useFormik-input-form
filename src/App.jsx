import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    name: "",
    lastName: "",
    age: "",
    nationalIdNumber: "",
    email: "",
    password: "",
  };

  let validationSchema = Yup.object({
    name: Yup.string()
      .required("وارد کردن نام الزامی است")
      .min(3, "نام باید حداقل 3 حرف داشته باشد نه کمتر")
      .max(16, "نام حداکثر باید 16 حرف داشته باشد نه بیشتر"),
    lastName: Yup.string()
      .required("وارد کردن نام خانوادگی الزامی است")
      .min(5, "نام خانوادگی حداقل باید 5 حرف داشته باشد نه کمتر")
      .max(17, "نام خانوادگی حداکثر باید 17 حرف داشته باشد نه بیشتر"),
    age: Yup.number()
      .required("وارد کردن سن الزامی است")
      .min(11, "سن شما باید بیشتر از 11 باشد نه کمتر")
      .max(55, "سن شما باید کمتر از 55 باشد نه بیشتر"),
    nationalIdNumber: Yup.string()
      .required("وارد کردن کدملی الزامی است")
      .length(10, "کدملی باید 10 تا عدد داشته باشد نه بیشتر و نه کمتر"),
    email: Yup.string()
      .required("وارد کردن ایمیل الزامی است")
      .email("لطفا یک ایمیل یا جیمیل معتبر وارد کنید"),
    password: Yup.string()
      .required("وارد کردن رمز عبور الزامی است")
      .min(4, "رمز عبور حداقل باید 4 کاراکتر داشته باشد نه کمتر")
      .max(25, "رمز عبور حداقل باید 25 کاراکتر داشته باشد نه بیشتر")
      .matches(/[A-Za-z-!@#$%^&*]/, "!@#$%^&* : رمز عبور حداقل باید یک حروف انگلیسی داشته باشد و یک کاراکتر خاص داشته باشد مثل")
      .matches(/[0-9]/, "رمز عبور حداقل باید یک عدد داشته باشد"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030014] px-4 py-10 text-white sm:px-6">
      {/* =========================================================
          ALL ANIMATIONS
      ========================================================== */}

      <style>
        {`
          /* =====================================================
             BACKGROUND ORBS
          ====================================================== */

          @keyframes floatOne {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }

            50% {
              transform: translate(80px, -50px) scale(1.15);
            }
          }

          @keyframes floatTwo {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }

            50% {
              transform: translate(-70px, 60px) scale(1.2);
            }
          }

          @keyframes pulseGlow {
            0%, 100% {
              opacity: .3;
              transform: scale(1);
            }

            50% {
              opacity: .75;
              transform: scale(1.2);
            }
          }


          /* =====================================================
             CYBER GRID
          ====================================================== */

          @keyframes moveGrid {
            0% {
              transform:
                perspective(500px)
                rotateX(60deg)
                translateY(0);
            }

            100% {
              transform:
                perspective(500px)
                rotateX(60deg)
                translateY(80px);
            }
          }


          /* =====================================================
             PAGE / CARD INTRO
          ====================================================== */

          @keyframes pageReveal {
            0% {
              opacity: 0;
              transform:
                translateY(35px)
                scale(.96);
              filter: blur(10px);
            }

            100% {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
              filter: blur(0);
            }
          }


          /* =====================================================
             CARD FLOAT
          ====================================================== */

          @keyframes cardFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-6px);
            }
          }


          /* =====================================================
             CARD NEON GLOW
          ====================================================== */

          @keyframes borderGlow {
            0%, 100% {
              box-shadow:
                0 0 20px rgba(59,130,246,.25),
                0 0 50px rgba(168,85,247,.15),
                inset 0 0 30px rgba(168,85,247,.05);
            }

            50% {
              box-shadow:
                0 0 35px rgba(59,130,246,.45),
                0 0 80px rgba(168,85,247,.3),
                inset 0 0 40px rgba(168,85,247,.08);
            }
          }


          /* =====================================================
             SCAN LINE
          ====================================================== */

          @keyframes scanLine {
            0% {
              transform: translateY(-120%);
              opacity: 0;
            }

            10% {
              opacity: .7;
            }

            90% {
              opacity: .7;
            }

            100% {
              transform: translateY(900%);
              opacity: 0;
            }
          }


          /* =====================================================
             HEADER FLOAT
          ====================================================== */

          @keyframes headerFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-4px);
            }
          }


          /* =====================================================
             ICON ROTATION
          ====================================================== */

          @keyframes spinSlow {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }


          /* =====================================================
             INPUT REVEAL
          ====================================================== */

          @keyframes inputReveal {
            0% {
              opacity: 0;
              transform: translateX(-20px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }


          /* =====================================================
             ERROR ANIMATION
          ====================================================== */

          @keyframes errorPop {
            0% {
              opacity: 0;
              transform: translateX(-8px);
            }

            60% {
              transform: translateX(3px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }


          /* =====================================================
             BUTTON GLOW
          ====================================================== */

          @keyframes neonButton {
            0%, 100% {
              box-shadow:
                0 0 15px rgba(168,85,247,.35),
                0 0 35px rgba(59,130,246,.15);
            }

            50% {
              box-shadow:
                0 0 25px rgba(236,72,153,.55),
                0 0 60px rgba(59,130,246,.3);
            }
          }


          /* =====================================================
             PARTICLES
          ====================================================== */

          @keyframes particleFloat {
            0%, 100% {
              transform:
                translateY(0)
                translateX(0);
              opacity: .25;
            }

            50% {
              transform:
                translateY(-30px)
                translateX(12px);
              opacity: .9;
            }
          }


          /* =====================================================
             NEON DOT
          ====================================================== */

          @keyframes neonPulse {
            0%, 100% {
              opacity: .4;

              box-shadow:
                0 0 8px rgba(168,85,247,.4),
                0 0 20px rgba(59,130,246,.15);
            }

            50% {
              opacity: 1;

              box-shadow:
                0 0 15px rgba(168,85,247,.8),
                0 0 35px rgba(59,130,246,.35);
            }
          }


          /* =====================================================
             APPLY ANIMATIONS
          ====================================================== */

          .premium-page {
            animation:
              pageReveal
              1s
              cubic-bezier(.16,1,.3,1)
              forwards;
          }

          .premium-card {
            animation:
              pageReveal
              1s
              cubic-bezier(.16,1,.3,1)
              forwards,
              cardFloat
              6s
              ease-in-out
              1.2s
              infinite;
          }

          .premium-header {
            animation:
              headerFloat
              4s
              ease-in-out
              1.2s
              infinite;
          }

          .premium-input {
            animation:
              inputReveal
              .7s
              cubic-bezier(.16,1,.3,1)
              both;
          }

          .premium-error {
            animation:
              errorPop
              .35s
              cubic-bezier(.16,1,.3,1);
          }

          .premium-particle {
            animation:
              particleFloat
              5s
              ease-in-out
              infinite;
          }

          .premium-neon-dot {
            animation:
              neonPulse
              2.5s
              ease-in-out
              infinite;
          }

          .animate-grid {
            animation:
              moveGrid
              8s
              linear
              infinite;
          }

          .animate-float-one {
            animation:
              floatOne
              8s
              ease-in-out
              infinite;
          }

          .animate-float-two {
            animation:
              floatTwo
              10s
              ease-in-out
              infinite;
          }

          .animate-pulse-glow {
            animation:
              pulseGlow
              5s
              ease-in-out
              infinite;
          }

          .animate-border-glow {
            animation:
              borderGlow
              4s
              ease-in-out
              infinite;
          }

          .animate-button-glow {
            animation:
              neonButton
              3s
              ease-in-out
              infinite;
          }

          .animate-spin-slow {
            animation:
              spinSlow
              20s
              linear
              infinite;
          }


          /* =====================================================
             NEON TEXT
          ====================================================== */

          .neon-text {
            text-shadow:
              0 0 8px rgba(168,85,247,.8),
              0 0 20px rgba(59,130,246,.45);
          }


          /* =====================================================
             INPUT FOCUS
          ====================================================== */

          .premium-input {
            transition:
              transform .3s ease,
              border-color .3s ease,
              box-shadow .3s ease,
              background .3s ease;
          }

          .premium-input:focus {
            transform: translateY(-2px);

            border-color:
              rgba(168,85,247,.9);

            box-shadow:
              0 0 0 1px rgba(168,85,247,.35),
              0 0 15px rgba(168,85,247,.35),
              0 0 35px rgba(59,130,246,.18);

            background:
              linear-gradient(
                120deg,
                rgba(168,85,247,.07),
                rgba(59,130,246,.04),
                rgba(236,72,153,.05)
              );
          }


          /* =====================================================
             BUTTON SHINE
          ====================================================== */

          .premium-button {
            position: relative;
            isolation: isolate;
          }

          .premium-button::before {
            content: "";

            position: absolute;

            top: 0;
            left: -150%;

            width: 45%;
            height: 100%;

            background:
              linear-gradient(
                90deg,
                transparent,
                rgba(255,255,255,.35),
                transparent
              );

            transform: skewX(-20deg);

            transition:
              left .8s ease;

            z-index: -1;
          }

          .premium-button:hover::before {
            left: 150%;
          }


          /* =====================================================
             BUTTON HOVER
          ====================================================== */

          .premium-button:hover {
            box-shadow:
              0 0 20px rgba(236,72,153,.5),
              0 0 45px rgba(168,85,247,.35),
              0 0 80px rgba(59,130,246,.2);
          }


          /* =====================================================
             SCAN LINE
          ====================================================== */

          .scan-line {
            position: absolute;

            left: 0;
            top: 0;

            width: 100%;
            height: 2px;

            background:
              linear-gradient(
                90deg,
                transparent,
                rgba(96,165,250,.8),
                rgba(217,70,239,.9),
                transparent
              );

            box-shadow:
              0 0 10px rgba(168,85,247,.8),
              0 0 25px rgba(59,130,246,.5);

            animation:
              scanLine
              5s
              linear
              infinite;

            pointer-events: none;

            z-index: 20;
          }


          /* =====================================================
             REDUCED MOTION
          ====================================================== */

          /* =====================================================
   PREMIUM INPUT FOCUS SYSTEM
   Professional Neon / Cyber UI
====================================================== */

/* =====================================================
   INPUT ENERGY ANIMATION
====================================================== */

@keyframes inputEnergy {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}


/* =====================================================
   INPUT IDLE GLOW
====================================================== */

@keyframes inputIdleGlow {
  0%,
  100% {
    box-shadow:
      0 0 0 1px rgba(168, 85, 247, 0.18),
      0 0 10px rgba(168, 85, 247, 0.05),
      inset 0 0 10px rgba(168, 85, 247, 0.01);
  }

  50% {
    box-shadow:
      0 0 0 1px rgba(139, 92, 246, 0.30),
      0 0 16px rgba(168, 85, 247, 0.10),
      0 0 28px rgba(59, 130, 246, 0.05),
      inset 0 0 14px rgba(168, 85, 247, 0.02);
  }
}


/* =====================================================
   INPUT FOCUS GLOW
====================================================== */

@keyframes inputFocusGlow {
  0% {
    box-shadow:
      0 0 0 1px rgba(168, 85, 247, 0.45),
      0 0 12px rgba(168, 85, 247, 0.22),
      0 0 25px rgba(59, 130, 246, 0.08),
      inset 0 0 12px rgba(168, 85, 247, 0.03);
  }

  50% {
    box-shadow:
      0 0 0 1px rgba(236, 72, 153, 0.75),
      0 0 22px rgba(168, 85, 247, 0.42),
      0 0 48px rgba(59, 130, 246, 0.20),
      0 0 75px rgba(236, 72, 153, 0.08),
      inset 0 0 18px rgba(168, 85, 247, 0.06);
  }

  100% {
    box-shadow:
      0 0 0 1px rgba(168, 85, 247, 0.45),
      0 0 12px rgba(168, 85, 247, 0.22),
      0 0 25px rgba(59, 130, 246, 0.08),
      inset 0 0 12px rgba(168, 85, 247, 0.03);
  }
}


/* =====================================================
   INPUT BORDER ENERGY
====================================================== */

@keyframes inputBorderEnergy {
  0% {
    border-color: rgba(168, 85, 247, 0.55);
  }

  33% {
    border-color: rgba(59, 130, 246, 0.85);
  }

  66% {
    border-color: rgba(236, 72, 153, 0.85);
  }

  100% {
    border-color: rgba(168, 85, 247, 0.55);
  }
}


/* =====================================================
   INPUT LIGHT SWEEP
====================================================== */

@keyframes inputLightSweep {
  0% {
    left: -120%;
    opacity: 0;
  }

  15% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  85% {
    opacity: 0;
  }

  100% {
    left: 120%;
    opacity: 0;
  }
}


/* =====================================================
   INPUT FOCUS PULSE
====================================================== */

@keyframes inputFocusPulse {
  0%,
  100% {
    transform:
      translateY(-2px)
      scale(1.003);
  }

  50% {
    transform:
      translateY(-3px)
      scale(1.008);
  }
}


/* =====================================================
   INPUT BASE
====================================================== */

.premium-input {
  position: relative;

  background:
    linear-gradient(
      120deg,
      rgba(5, 3, 22, 0.96),
      rgba(12, 6, 35, 0.96),
      rgba(5, 3, 22, 0.96)
    );

  background-size: 200% 200%;

  animation:
    inputReveal
    0.7s
    cubic-bezier(.16,1,.3,1)
    both,
    inputEnergy
    8s
    ease-in-out
    infinite;

  transition:
    transform 0.4s cubic-bezier(.16,1,.3,1),
    border-color 0.4s ease,
    box-shadow 0.4s ease,
    background 0.4s ease,
    letter-spacing 0.3s ease;
}


/* =====================================================
   INPUT IDLE NEON
====================================================== */

.premium-input {
  box-shadow:
    0 0 0 1px rgba(168, 85, 247, 0.15),
    0 0 10px rgba(168, 85, 247, 0.04),
    inset 0 0 10px rgba(168, 85, 247, 0.01);
}


/* =====================================================
   INPUT HOVER
====================================================== */

.premium-input:hover {
  transform:
    translateY(-2px)
    scale(1.002);

  border-color:
    rgba(168, 85, 247, 0.75);

  box-shadow:
    0 0 0 1px rgba(168, 85, 247, 0.22),
    0 0 16px rgba(168, 85, 247, 0.18),
    0 0 32px rgba(59, 130, 246, 0.08),
    inset 0 0 12px rgba(168, 85, 247, 0.02);
}


/* =====================================================
   INPUT FOCUS
====================================================== */

.premium-input:focus {
  transform:
    translateY(-3px)
    scale(1.008);

  outline: none;

  background:
    linear-gradient(
      120deg,
      rgba(168, 85, 247, 0.09),
      rgba(59, 130, 246, 0.09),
      rgba(236, 72, 153, 0.09),
      rgba(168, 85, 247, 0.09)
    );

  background-size: 300% 300%;

  border-color:
    rgba(168, 85, 247, 0.85);

  animation:
    inputFocusGlow
    2.4s
    ease-in-out
    infinite,
    inputEnergy
    4s
    linear
    infinite,
    inputBorderEnergy
    3s
    ease-in-out
    infinite,
    inputFocusPulse
    2.4s
    ease-in-out
    infinite;

  box-shadow:
    0 0 0 1px rgba(168, 85, 247, 0.50),
    0 0 18px rgba(168, 85, 247, 0.30),
    0 0 40px rgba(59, 130, 246, 0.15),
    inset 0 0 18px rgba(168, 85, 247, 0.04);

  caret-color:
    #c084fc;
}


/* =====================================================
   INPUT FOCUS LIGHT EFFECT
====================================================== */

.premium-input:focus {
  position: relative;
}


/* =====================================================
   INPUT PLACEHOLDER
====================================================== */

.premium-input::placeholder {
  color: rgba(148, 163, 184, 0.55);

  transition:
    opacity 0.35s ease,
    transform 0.35s cubic-bezier(.16,1,.3,1),
    letter-spacing 0.35s ease;
}


.premium-input:focus::placeholder {
  opacity: 0.25;

  transform:
    translateX(8px);

  letter-spacing:
    0.02em;
}


/* =====================================================
   INPUT NUMBER ARROWS
====================================================== */

.premium-input::-webkit-inner-spin-button,
.premium-input::-webkit-outer-spin-button {
  opacity: 0.35;

  filter:
    drop-shadow(
      0 0 4px
      rgba(168, 85, 247, 0.8)
    );

  transition:
    opacity 0.3s ease;
}


.premium-input:focus::-webkit-inner-spin-button,
.premium-input:focus::-webkit-outer-spin-button {
  opacity: 0.8;
}


/* =====================================================
   INPUT TEXT SELECTION
====================================================== */

.premium-input::selection {
  background:
    rgba(168, 85, 247, 0.35);

  color:
    white;
}


/* =====================================================
   PASSWORD / TEXT CARET
====================================================== */

.premium-input:focus {
  caret-color:
    #d8b4fe;
}


/* =====================================================
   PREMIUM INPUT ACCESSIBILITY
====================================================== */

.premium-input:focus-visible {
  outline:
    none;
}

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: .01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: .01ms !important;
            }
          }
        `}
      </style>

      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Purple Orb */}

        <div
          className="
            animate-float-one
            absolute
            -left-32
            top-10
            h-72
            w-72
            rounded-full
            bg-purple-700/25
            blur-[100px]
          "
        />

        {/* Blue Orb */}

        <div
          className="
            animate-float-two
            absolute
            -right-32
            top-40
            h-80
            w-80
            rounded-full
            bg-blue-600/25
            blur-[110px]
          "
        />

        {/* Bottom Pink Orb */}

        <div
          className="
            animate-pulse-glow
            absolute
            bottom-0
            left-1/2
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-fuchsia-600/15
            blur-[120px]
          "
        />

        {/* =====================================================
            VERTICAL NEON LINES
        ====================================================== */}

        <div
          className="
            absolute
            left-[8%]
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-purple-500/30
            to-transparent
          "
        />

        <div
          className="
            absolute
            right-[8%]
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-blue-500/30
            to-transparent
          "
        />

        {/* =====================================================
            FLOATING PARTICLES
        ====================================================== */}

        <div
          className="
            premium-particle
            absolute
            left-[12%]
            top-[18%]
            h-2
            w-2
            rounded-full
            bg-fuchsia-400
            shadow-[0_0_15px_#e879f9]
          "
        />

        <div
          className="
            premium-particle
            absolute
            left-[20%]
            top-[35%]
            h-1
            w-1
            rounded-full
            bg-purple-400
            shadow-[0_0_12px_#c084fc]
          "
          style={{ animationDelay: "1s" }}
        />

        <div
          className="
            premium-particle
            absolute
            right-[15%]
            top-[28%]
            h-2
            w-2
            rounded-full
            bg-blue-400
            shadow-[0_0_15px_#60a5fa]
          "
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="
            premium-particle
            absolute
            right-[25%]
            top-[60%]
            h-1
            w-1
            rounded-full
            bg-cyan-400
            shadow-[0_0_12px_#22d3ee]
          "
          style={{ animationDelay: "2s" }}
        />

        <div
          className="
            premium-particle
            absolute
            bottom-[22%]
            left-[17%]
            h-1.5
            w-1.5
            rounded-full
            bg-purple-400
            shadow-[0_0_15px_#c084fc]
          "
          style={{ animationDelay: "2.5s" }}
        />

        <div
          className="
            premium-particle
            absolute
            bottom-[15%]
            right-[18%]
            h-2
            w-2
            rounded-full
            bg-pink-400
            shadow-[0_0_15px_#f472b6]
          "
          style={{ animationDelay: "3s" }}
        />

        {/* =====================================================
            CYBER GRID
        ====================================================== */}

        <div
          className="
            animate-grid
            absolute
            -bottom-[300px]
            left-[-20%]
            h-[600px]
            w-[140%]
            opacity-20
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(99,102,241,.4)
                1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(99,102,241,.4)
                1px,
                transparent 1px
              )
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div
        className="
          premium-page
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-2xl
          items-center
          justify-center
        "
      >
        {/* =====================================================
            FORM CARD
        ====================================================== */}

        <div
          className="
            premium-card
            animate-border-glow
            relative
            w-full
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-[#07051c]/75
            p-6
            backdrop-blur-2xl
            sm:p-8
            lg:p-10
          "
        >
          {/* Scan Line */}

          <div className="scan-line" />

          {/* Top Card Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -top-32
              left-1/2
              h-64
              w-64
              -translate-x-1/2
              rounded-full
              bg-purple-600/20
              blur-[90px]
            "
          />

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div
            className="
              premium-header
              relative
              mb-8
              text-center
            "
          >
            {/* Rotating User Icon */}

            <div
              className="
                animate-spin-slow
                mx-auto
                mb-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-purple-400/60
                bg-gradient-to-br
                from-purple-500/20
                via-fuchsia-500/10
                to-blue-500/20
                shadow-[0_0_25px_rgba(168,85,247,.35)]
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-blue-400/50
                  bg-[#09051d]
                  text-3xl
                  shadow-[0_0_20px_rgba(59,130,246,.4)]
                "
              >
                👤
              </div>
            </div>

            {/* Title */}

            <h1
              className="
                neon-text
                text-3xl
                font-black
                tracking-tight
                sm:text-4xl
              "
            >
              Create Your Account
            </h1>

            {/* Subtitle */}

            <p
              className="
                mt-3
                text-sm
                text-slate-400
                sm:text-base
              "
            >
              Join us today! Fill in the details below.
            </p>

            {/* Header Neon Line */}

            <div
              className="
                mx-auto
                mt-6
                h-px
                w-32
                bg-gradient-to-r
                from-transparent
                via-purple-400
                to-transparent
                shadow-[0_0_12px_#a855f7]
              "
            />
          </div>

          {/* =====================================================
              FORM
          ====================================================== */}

          <form
            action=""
            onSubmit={formik.handleSubmit}
            className="
              relative
              space-y-5
            "
          >
            {/* =================================================
                NAME
            ================================================== */}

            <div>
              <label
                htmlFor="name"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-slate-200
                "
              >
                <span className="mr-2 text-purple-400">✦</span>
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Please Enter your Name :"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  animationDelay: "0.15s",
                }}
                className="
                  premium-input
                  w-full
                  rounded-xl
                  border
                  border-purple-500/40
                  bg-[#050316]/80
                  px-5
                  py-4
                  text-white
                  outline-none
                  placeholder:text-slate-600
                  hover:border-purple-400/70
                  focus:border-purple-400
                "
              />

              {formik.errors.name && formik.touched.name && (
                <p
                  className="
                    premium-error
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-lg
                    font-medium
                    text-pink-400
                  "
                >
                  <span>●</span>

                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* =================================================
                LAST NAME
            ================================================== */}

            <div>
              <label
                htmlFor="lastName"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-slate-200
                "
              >
                <span className="mr-2 text-blue-400">✦</span>
                Last Name
              </label>

              <input
                id="lastName"
                type="text"
                placeholder="Please Enter your LastName :"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  animationDelay: "0.25s",
                }}
                className="
                  premium-input
                  w-full
                  rounded-xl
                  border
                  border-purple-500/40
                  bg-[#050316]/80
                  px-5
                  py-4
                  text-white
                  outline-none
                  placeholder:text-slate-600
                  hover:border-purple-400/70
                  focus:border-purple-400
                "
              />

              {formik.errors.lastName && formik.touched.lastName && (
                <p
                  className="
                    premium-error
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-lg
                    font-medium
                    text-pink-400
                  "
                >
                  <span>●</span>

                  {formik.errors.lastName}
                </p>
              )}
            </div>

            {/* =================================================
                AGE
            ================================================== */}

            <div>
              <label
                htmlFor="age"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-slate-200
                "
              >
                <span className="mr-2 text-cyan-400">✦</span>
                Age
              </label>

              <input
                id="age"
                type="number"
                placeholder="Please Enter your Age :"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  animationDelay: "0.35s",
                }}
                className="
                  premium-input
                  w-full
                  rounded-xl
                  border
                  border-purple-500/40
                  bg-[#050316]/80
                  px-5
                  py-4
                  text-white
                  outline-none
                  placeholder:text-slate-600
                  hover:border-blue-400/70
                  focus:border-blue-400
                "
              />

              {formik.errors.age && formik.touched.age && (
                <p
                  className="
                    premium-error
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-lg
                    font-medium
                    text-pink-400
                  "
                >
                  <span>●</span>

                  {formik.errors.age}
                </p>
              )}
            </div>

            {/* =================================================
                NATIONAL ID
            ================================================== */}

            <div>
              <label
                htmlFor="nationalIdNumber"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-slate-200
                "
              >
                <span className="mr-2 text-fuchsia-400">✦</span>
                National Id Number
              </label>

              <input
                id="nationalIdNumber"
                type="number"
                placeholder="Please Enter your National Id Number :"
                name="nationalIdNumber"
                value={formik.values.nationalIdNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  animationDelay: "0.45s",
                }}
                className="
                  premium-input
                  w-full
                  rounded-xl
                  border
                  border-purple-500/40
                  bg-[#050316]/80
                  px-5
                  py-4
                  text-white
                  outline-none
                  placeholder:text-slate-600
                  hover:border-fuchsia-400/70
                  focus:border-fuchsia-400
                "
              />

              {formik.errors.nationalIdNumber &&
                formik.touched.nationalIdNumber && (
                  <p
                    className="
                    premium-error
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-lg
                    font-medium
                    text-pink-400
                  "
                  >
                    <span>●</span>

                    {formik.errors.nationalIdNumber}
                  </p>
                )}
            </div>

            {/* =================================================
                EMAIL
            ================================================== */}

            <div>
              <label
                htmlFor="email"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-slate-200
                "
              >
                <span className="mr-2 text-blue-400">✦</span>
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Please Enter your Email :"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  animationDelay: "0.55s",
                }}
                className="
                  premium-input
                  w-full
                  rounded-xl
                  border
                  border-purple-500/40
                  bg-[#050316]/80
                  px-5
                  py-4
                  text-white
                  outline-none
                  placeholder:text-slate-600
                  hover:border-blue-400/70
                  focus:border-blue-400
                "
              />

              {formik.errors.email && formik.touched.email && (
                <p
                  className="
                    premium-error
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-lg
                    font-medium
                    text-pink-400
                  "
                >
                  <span>●</span>

                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* =================================================
                PASSWORD
            ================================================== */}

            <div>
              <label
                htmlFor="password"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-slate-200
                "
              >
                <span className="mr-2 text-purple-400">✦</span>
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Please Enter your Password :"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    animationDelay: "0.65s",
                  }}
                  className="
                    premium-input
                    w-full
                    rounded-xl
                    border
                    border-purple-500/40
                    bg-[#050316]/80
                    px-5
                    py-4
                    pr-14
                    text-white
                    outline-none
                    placeholder:text-slate-600
                    hover:border-purple-400/70
                    focus:border-purple-400
                  "
                />

                {/* Password Toggle */}

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    rounded-lg
                    px-3
                    py-2
                    text-lg
                    text-purple-400
                    transition-all
                    duration-300
                    hover:bg-purple-500/10
                    hover:text-purple-300
                  "
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {formik.errors.password && formik.touched.password && (
                <p
                  className="
                    premium-error
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-lg
                    font-medium
                    text-pink-400
                  "
                >
                  <span>●</span>

                  {formik.errors.password}
                </p>
              )}
            </div>

            {/* =================================================
                SUBMIT BUTTON
            ================================================== */}

            <button
              type="submit"
              className="
                premium-button
                animate-button-glow
                group
                relative
                mt-4
                w-full
                overflow-hidden
                rounded-xl
                border
                border-white/20
                bg-gradient-to-r
                from-fuchsia-600
                via-purple-600
                to-blue-600
                px-6
                py-4
                text-sm
                font-black
                tracking-[0.18em]
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-[1.01]
                hover:from-fuchsia-500
                hover:via-purple-500
                hover:to-blue-500
                active:translate-y-0
                active:scale-[0.99]
              "
            >
              <span
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                CREATE ACCOUNT
                <span
                  className="
                    text-xl
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </span>
            </button>
          </form>

          {/* =====================================================
              FOOTER
          ====================================================== */}

          <div
            className="
              mt-7
              text-center
              text-sm
              text-slate-500
            "
          >
            Already have an account?
            <button
              type="button"
              className="
                ml-2
                font-semibold
                text-fuchsia-400
                transition-all
                duration-300
                hover:text-blue-400
                hover:[text-shadow:0_0_12px_rgba(168,85,247,.8)]
              "
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
