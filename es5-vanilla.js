function Bazaar(stalls) {
  if (!(this instanceof Bazaar)) return new Bazaar(stalls)

  // Coerce `stalls` into an proper Array
  this._stalls = [].slice.call(stalls)
}

Bazaar.prototype = {
  constructor: Bazaar,

  walkAround: function Bazaar$walkAround(person) {
    this.stalls.forEach(function walker(stall, _index, _stalls) {
      person.visit(stall)
    })
  }
}

Object.defineProperty(Bazaar.prototype, "stalls", {
  enumerable: false,
  configurable: true,
  set: void 0,
  get: function Bazaar$stalls() {
    // Use value, not reference sematics
    return this._stalls.concat()
  }
})

function Person(name, cash) {
  if (!(this instanceof Person)) return new Person(name, cash)

  this.name = String(name)
  this.cash = Number(cash)
  this.bag = []

  // If cash is NaN or less the zero, cap it at zero
  if (this.cash !== this.cash || this.cash < 0) this.cash = 0
}

Person.prototype = {
  constructor: Person,

  visit: function Person$visit(stall) {
    var name, ware

    for (name in stall) {
      if (Object.prototype.hasOwnProperty.call(stall, name)) {
        ware = stall[name]

        if (ware.stock > 0 && this.cash >= ware.price) {
          ware.stock--
          this.cash -= ware.price
          this.bag.push(ware.item)
        } else {
          console.log("Out of cash", this.cash)
          break // or return
        }
      }
    }
  },

  toString: function Person$toString() {
    return this.name
  }
}

function Fool(name) {
  if (!(this instanceof Fool)) return new Fool(name)

  // Fools don't have any cash
  Person.call(this, name, 0)
}

Fool.prototype = new Person()
Fool.prototype.constructor = Fool
Fool.prototype.visit = function Fool$visit(stall) {
  console.log("Fools don't understands stalls")
}

