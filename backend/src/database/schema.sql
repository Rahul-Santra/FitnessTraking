-- =========================================
-- ENABLE UUID EXTENSION
-- =========================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =========================================
-- USERS TABLE
-- Authentication Only
-- =========================================

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- PROFILES TABLE
-- User onboarding and fitness data
-- =========================================

CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,

    age INT NOT NULL CHECK (age >= 10 AND age <= 100),

    weight FLOAT NOT NULL CHECK (weight > 0),
    height FLOAT NOT NULL CHECK (height > 0),

    gender VARCHAR(10)
    CHECK (gender IN ('male', 'female')),

    fitness_goal VARCHAR(50)
    CHECK (
        fitness_goal IN (
            'lose_weight',
            'gain_muscle',
            'maintain_fitness'
        )
    ),

    experience_level VARCHAR(50)
    CHECK (
        experience_level IN (
            'beginner',
            'intermediate',
            'advanced'
        )
    ),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- CYCLES TABLE
-- Women health tracking
-- =========================================

CREATE TABLE cycles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    user_id UUID REFERENCES users(id) ON DELETE CASCADE,

    last_period_date DATE NOT NULL,

    cycle_length INT DEFAULT 28
    CHECK (
        cycle_length >= 20
        AND cycle_length <= 40
    ),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- WORKOUTS TABLE
-- Generated daily workout plans
-- =========================================

CREATE TABLE workouts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    user_id UUID REFERENCES users(id) ON DELETE CASCADE,

    workout_date DATE NOT NULL,

    workout_type VARCHAR(50)
    CHECK (
        workout_type IN (
            'gym',
            'yoga',
            'home'
        )
    ),

    intensity VARCHAR(50)
    CHECK (
        intensity IN (
            'low',
            'medium',
            'high'
        )
    ),

    duration_minutes INT NOT NULL,

    plan JSONB NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- WORKOUT LOGS TABLE
-- Tracks completion
-- =========================================

CREATE TABLE workout_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    user_id UUID REFERENCES users(id) ON DELETE CASCADE,

    workout_id UUID REFERENCES workouts(id) ON DELETE CASCADE,

    completed BOOLEAN DEFAULT FALSE,

    completed_at TIMESTAMP
);

-- =========================================
-- DAILY LOGS TABLE
-- Mood and energy tracking
-- =========================================

CREATE TABLE daily_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    user_id UUID REFERENCES users(id) ON DELETE CASCADE,

    log_date DATE NOT NULL,

    mood VARCHAR(50),

    energy_level INT
    CHECK (
        energy_level >= 1
        AND energy_level <= 10
    ),

    notes TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- INDEXES
-- Performance optimization
-- =========================================

CREATE INDEX idx_user_email
ON users(email);

CREATE INDEX idx_workout_user_date
ON workouts(user_id, workout_date);

CREATE INDEX idx_daily_logs_user_date
ON daily_logs(user_id, log_date);