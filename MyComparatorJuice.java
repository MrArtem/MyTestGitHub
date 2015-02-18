package MyComparatorVolumnSymbol;

import java.util.ArrayList;
import java.util.Comparator;

import Component.Component;
import Juice.Juice;

public class MyComparatorJuice implements Comparator<Juice> {

	@Override
	public int compare(Juice o1,Juice o2) {
		// TODO Auto-generated method stub
		if(o1.size()<o2.size())
		{
		return -1;
		}
		if(o1.size() == o2.size())
		{
			int result = 0;
		  for(int i = 0;i<o1.size();i++)
		  {
			  Component c1 = o1.get(i);
			  Component c2 = o2.get(i);
			  result += c1.getComponent().compareToIgnoreCase(c2.getComponent());
		  }
		  return result;
		}
	    return 1;
	}
}


