class Bazaar {
  constructor(stalls) {
    this._stalls = Array.from(stalls)
  }

  get stalls() {
    // Use value, not reference sematics
    return this._stalls.concat()
  }

  walkAround(person) {
    let stall

    for (stall of this.stalls) {
      person.visit(stall)
    }
  }
}

class Person {
  constructor(name, cash) {
    this.name = String(name)
    this.cash = Number(cash)
    this.wares = []

    // If cash is NaN or less the zero, cap it at zero
    if (this.cash !== this.cash || this.cash < 0) this.cash = 0
  }

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
  }

  toString() {
    return this.name
  }
}

class Fool extends Person {
  constructor(name) {
    // Fools don't have any cash
    super(name, 0)
  }

  visit(stall) {
    console.log("Fools don't understands stalls")
  }
}
