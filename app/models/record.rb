class Record
  include Mongoid::Document
  field :title
  field :amount
  field :date, :type => Date
end
