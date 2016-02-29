"use strict";

function createPrototype(superPrototype, prototype) {
  return Object.create(superPrototype,
    Object.getOwnPropertyNames(prototype).map(function toDescriptor(key) {
      return [key, Object.getOwnPropertyDescriptor(prototype, key)]
    }).reduce(function toDescriptorsObject(object, pair, _index, _descriptors) {
      object[pair[0]] = pair[1]
      return object
    }, {}))
}

function Bazaar(stalls) {
  if (!(this instanceof Bazaar)) return new Bazaar(stalls)

  // Coerce `stalls` into an proper Array
  this._stalls = [].slice.call(stalls)
}

Bazaar.prototype = createPrototype(Object.prototype, {
  constructor: Bazaar,

  get stalls() {
    // Use value, not reference sematics
    return this._stalls.concat()
  },

  walkAround(person) {
    this.stalls.forEach(person.visit.bind(person))
  }
})

function Person(name, cash) {
  if (!(this instanceof Person)) return new Person(name, cash)

  this.name = String(name)
  this.cash = Number(cash)

  // If cash is NaN or less the zero, cap it at zero
  if (this.cash !== this.cash || this.cash < 0) this.cash = 0
}

Person.prototype = createPrototype(Object.prototype, {
  constructor: Person,

  visit(stall) {
    let name, ware

    for (name in stall) {
      if (Object.prototype.hasOwnProperty.call(stall, name)) {
        ware = stall[name]

        if (ware.stock > 0 && this.cash >= ware.price) {
          ware.stock--
          this.cash -= were.price
          this.wares.push(ware.item)
        } else {
          console.log("Out of cash", this.cash)
          break // or return
        }
      }
    }
  },

  toString() {
    return this.name
  }
})

function Fool(name) {
  if (!(this instanceof Fool)) return new Fool(name)

  // Fools don't have any cash
  Person.call(this, name, 0)
}

Fool.prototype = createPrototype(Person.prototype, {
  constructor: Person,

  visit(stall) {
    console.log("Fools don't understands stalls")
  }
})

