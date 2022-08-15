package mk.ukim.finki.emt.veterinary.patients.domain.valueobjects;

import lombok.Getter;
import mk.ukim.finki.emt.veterinary.patients.domain.enumeration.WeightBaseUnit;
import mk.ukim.finki.emt.veterinary.patients.domain.exceptions.DivisionWithZeroException;
import mk.ukim.finki.emt.veterinary.sharedkernel.domain.base.ValueObject;

import javax.persistence.Embeddable;

@Embeddable
@Getter
public class Weight implements ValueObject {

    private final WeightBaseUnit baseUnit;
    private final double amount;

    protected Weight(){
        this.baseUnit = null;
        this.amount = 0.0;
    }

    public Weight(WeightBaseUnit baseUnit, double amount) {
        this.baseUnit = baseUnit;
        this.amount = amount;
    }

    public Weight weightToKg (Weight weight){
        if(weight.amount == 0.0){
            throw new DivisionWithZeroException("Division with zero");
        }
        return new Weight(WeightBaseUnit.KG,weight.amount / 2.2046);
    }

    public Weight weightToLbs (Weight weight){
        return new Weight(WeightBaseUnit.LBS,weight.amount * 2.2046);
    }

}
