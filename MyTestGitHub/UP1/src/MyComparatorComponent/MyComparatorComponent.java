package MyComparatorComponent;

import java.util.Comparator;

import Component.Component;

public class MyComparatorComponent implements Comparator<Component>{

	@Override
	public int compare(Component o1, Component o2) {
		// TODO Auto-generated method stub
		return o1.getComponent().compareToIgnoreCase(o2.getComponent());
	}

}
