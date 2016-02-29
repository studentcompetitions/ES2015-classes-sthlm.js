function Bazaar(stalls) {
  if (!(this instanceof Bazaar)) return new Bazaar(stalls)

  // Coerce `stalls` into an proper Array
  this._stalls = [].slice.call(stalls)
}

Bazaar.prototype = Object.create(Object.prototype, {
  constructor: {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Bazaar
  },
  stalls: {
    enumerable: false,
    configurable: true,
    set: void 0,
    get: function Bazaar$stalls() {
      // Use value, not reference sematics
      return this._stalls.concat()
    }
  },
  walkAround: {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function Bazaar$walkAround(person) {
      this.stalls.forEach(function walker(stall, _index, _stalls) {
        person.visit(stall)
      })
    }
  }
})

function Person(name, cash) {
  if (!(this instanceof Person)) return new Person(name, cash)

  this.name = String(name)
  this.cash = Number(cash)

  // If cash is NaN or less the zero, cap it at zero
  if (this.cash !== this.cash || this.cash < 0) this.cash = 0
}

Person.prototype = Object.create(Object.prototype, {
  constructor: {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Person
  },
  visit: {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function Person$visit(stall) {
      var name, ware

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
    }
  },
  toString: {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function Person$toString() {
      return this.name
    }
  }
})

function Fool(name) {
  if (!(this instanceof Fool)) return new Fool(name)

  // Fools don't have any cash
  Person.call(this, name, 0)
}

Fool.prototype = Object.create(Person.prototype, {
  constructor: {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Fool
  },
  visit: {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function Fool(stall) {
      console.log("Fools don't understands stalls")
    }
  }
})

var kedesh = new Bazaar([
  {
    apples: {
      stock: 70,
      price: 5,
      item: {
        name: "Apple",
        type: "fruit"
      }
    },
    pears: {
      stock: 50,
      price: 7,
      item: {
        name: "Pear",
        type: "fruit"
      }
    },
    oranges: {
      stock: 20,
      price: 10,
      item: {
        name: "Orange",
        type: "fruit"
      }
    }
  }, {
    granite: {
      stock: 4,
      price: 30,
      item: {
        name: "Granite",
        type: "stone"
      }
    },
    marble: {
      stock: 1,
      price: 100,
      item: {
        name: "Marble",
        type: "stone"
      }
    }
  }, {
    spruce: {
      stock: 10,
      price: 15,
      item: {
        name: "Spruce plank",
        type: "wood"
      }
    },
    birch: {
      stock: 10,
      price: 15,
      item: {
        name: "Birch plank",
        type: "wood"
      }
    }
  }
])

