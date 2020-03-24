# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_24_021921) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "companies", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "company_name", null: false
    t.string "website"
    t.string "location"
    t.integer "headcount"
    t.string "tagline"
    t.text "overview"
    t.text "culture"
    t.integer "amount_raised"
    t.integer "total_rounds"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "valuation"
    t.index ["owner_id"], name: "index_companies_on_owner_id", unique: true
  end

  create_table "company_employees", force: :cascade do |t|
    t.integer "employee_id", null: false
    t.integer "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_company_employees_on_company_id"
    t.index ["employee_id"], name: "index_company_employees_on_employee_id"
  end

  create_table "company_investors", force: :cascade do |t|
    t.integer "company_id", null: false
    t.string "investor_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_company_investors_on_company_id"
  end

  create_table "company_perks", force: :cascade do |t|
    t.integer "company_id", null: false
    t.string "perk_description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_company_perks_on_company_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.integer "company_id", null: false
    t.text "description", null: false
    t.string "location", null: false
    t.string "job_type", null: false
    t.integer "salary", null: false
    t.string "currency", null: false
    t.integer "years_experience", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_jobs_on_company_id"
    t.index ["owner_id"], name: "index_jobs_on_owner_id"
  end

  create_table "profile_educations", force: :cascade do |t|
    t.integer "profile_id", null: false
    t.string "school_name", null: false
    t.integer "graduation_year", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_profile_educations_on_profile_id"
  end

  create_table "profile_experiences", force: :cascade do |t|
    t.integer "profile_id", null: false
    t.string "employee_title", null: false
    t.string "company_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_profile_experiences_on_profile_id"
  end

  create_table "profile_projects", force: :cascade do |t|
    t.integer "profile_id", null: false
    t.string "project_title", null: false
    t.string "project_link", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_profile_projects_on_profile_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "bio", default: ""
    t.string "role", default: ""
    t.string "location", default: ""
    t.text "about", default: ""
    t.text "achievements", default: ""
    t.text "skills", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
